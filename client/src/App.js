import "./App.css";
import io from "socket.io-client";
import { useState, useEffect, useContext } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Footer from "./components/Footer/Footer";
import { userCtx } from "./store/user-ctx";

const socket = io.connect("/");

function App() {
  const ctx = useContext(userCtx);

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const listenToIncoming = () => {
    socket.on("RECEIVE_MSG", (data) => {
      ctx.onSetMessages(data);
    });
  };

  useEffect(listenToIncoming, []);

  return (
    <div className="App">
      {!ctx.isLoggedIn && (
        <LoginForm
          socket={socket}
          roomId={roomId}
          setRoomId={setRoomId}
          username={username}
          setUsername={setUsername}
        />
      )}
      {ctx.isLoggedIn && (
        <ChatRoom socket={socket} roomId={roomId} username={username} />
      )}
      <Footer />
    </div>
  );
}

export default App;
