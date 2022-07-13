import "./ChatRoom.css";
import { useState } from "react";
import ChatForm from "../ChatForm/ChatForm";
import ChatMessages from "../ChatMessages/ChatMessages";

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="ChatRoom">
      <h1 className="title">CHAT ROOM</h1>
      <ChatMessages messages={messages} />
      <ChatForm setMessages={setMessages} messages={messages} />
    </div>
  );
}

export default ChatRoom;
