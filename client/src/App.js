import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("/");

function Form() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, roomId);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          id="roomId"
          name="roomId"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h1>CHAT</h1>
      <ul>
        {messages.map((message, index) => {
          return <li key={`Message_${index}`}>{message}</li>;
        })}
      </ul>
      <ChatForm setMessages={setMessages} messages={messages} />
    </div>
  );
}

function ChatForm(prop) {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    prop.setMessages((previous) => {
      return [...previous, message];
    });
    console.log(prop.messages);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <input type="submit" onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {!isLoggedIn && <Form />}
      {isLoggedIn && <ChatRoom />}
    </div>
  );
}

export default App;
