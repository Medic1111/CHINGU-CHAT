import { useState, useEffect } from "react";
import "./ChatForm.css";

function ChatForm({ messages, setMessages, socket, roomId }) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      setMessages([...messages, message]);

      // Sending MSG

      let messageObj = {
        message: message,
        roomId: roomId,
      };

      await socket.emit("SEND_MSG", messageObj);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ChatForm">
      <input
        type="text"
        id="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoComplete="off"
        placeholder="message here"
      />
      <input type="submit" id="submitBtn" />
    </form>
  );
}

export default ChatForm;
