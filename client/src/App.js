import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import ChatRoom from "./components/ChatRoom/ChatRoom";

const socket = io.connect("/");

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState("");

  const listenToIncoming = () => {
    console.log("Effect running");
    socket.on("RECEIVE_MSG", (data) => {
      setMessages((prev) => {
        return [...prev, data];
      });
    });
  };

  useEffect(listenToIncoming, [socket]);

  return (
    <div className="App">
      {!isLoggedIn && (
        <LoginForm
          socket={socket}
          setIsLoggedIn={setIsLoggedIn}
          roomId={roomId}
          setRoomId={setRoomId}
        />
      )}
      {isLoggedIn && (
        <ChatRoom
          socket={socket}
          messages={messages}
          setMessages={setMessages}
          roomId={roomId}
        />
      )}
    </div>
  );
}

export default App;
