import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import ChatRoom from "./components/ChatRoom/ChatRoom";

const socket = io.connect("/");

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <ChatRoom />}
    </div>
  );
}

export default App;
