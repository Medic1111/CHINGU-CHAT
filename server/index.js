const express = require("express");
const cors = require("cors");
const socketio = require("socket.io");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

const server = app.listen(process.env.PORT || 3002, () =>
  console.log("Server Spinning")
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("JOIN_ROOM", (data) => {
    socket.join(data.roomId);
    socket
      .to(data.roomId)
      .emit("RECEIVE_MSG", `${data.username} has entered the room`);
  });

  socket.on("SEND_MSG", (msgContent) => {
    console.log(msgContent);
    socket.to(msgContent.roomId).emit("RECEIVE_MSG", msgContent.message);
  });

  socket.on("disconnect", () => console.log("User out"));
});
