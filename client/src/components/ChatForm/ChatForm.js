import { useState, useEffect } from "react";
import "./ChatForm.css";

function ChatForm({ messages, setMessages, socket, roomId, username }) {
  const [message, setMessage] = useState("");

  let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

  let currentTimeWithPad = currentTime.padStart(2, "0");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      setMessages([...messages, message]);

      // Sending MSG

      let messageObj = {
        message: message,
        roomId: roomId,
        username: username,
        time: currentTimeWithPad,
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
