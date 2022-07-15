import { useState } from "react";
import "./ChatForm.css";

function ChatForm({ messages, setMessages, socket, roomId, username }) {
  const [message, setMessage] = useState("");

  let currentHours = `${new Date().getHours()}`;
  let currentMinutes = `${new Date().getMinutes()}`;
  let currentTimeWithPad = `${currentHours}:${currentMinutes.padStart(2, "0")}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      // Sending MSG

      let newMessageObj = {
        message: message,
        roomId: roomId,
        username: username,
        time: currentTimeWithPad,
        type: "message",
      };
      setMessages([...messages, newMessageObj]);

      await socket.emit("SEND_MSG", newMessageObj);
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
