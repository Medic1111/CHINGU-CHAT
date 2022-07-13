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
  console.log("User Connected: ", socket.id);

  socket.on("disconnect", () => console.log("User out"));
});
