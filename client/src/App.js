import "./App.css";
import io from "socket.io-client";
import { useEffect, useContext } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Footer from "./components/Footer/Footer";
import { userCtx } from "./store/user-ctx";

const socket = io.connect("/");

function App() {
  const ctx = useContext(userCtx);

  const listenToIncoming = () => {
    socket.on("RECEIVE_MSG", (data) => {
      ctx.onSetMessages(data);
    });
  };

  useEffect(listenToIncoming, []);

  return (
    <div className="App">
      {!ctx.isLoggedIn ? (
        <LoginForm socket={socket} />
      ) : (
        <ChatRoom socket={socket} />
      )}
      <Footer />
    </div>
  );
}

export default App;
