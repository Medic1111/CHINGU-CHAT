import { useState, useContext } from "react";
import { userCtx } from "../../store/user-ctx";
import "./ChatForm.css";

function ChatForm({ socket }) {
  const ctx = useContext(userCtx);

  const [message, setMessage] = useState("");

  let currentHours = `${new Date().getHours()}`;
  let currentMinutes = `${new Date().getMinutes()}`;
  let currentTimeWithPad = `${currentHours}:${currentMinutes.padStart(2, "0")}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      let newMessageObj = {
        message,
        roomId: ctx.roomId,
        username: ctx.username,
        time: currentTimeWithPad,
        type: "message",
      };
      ctx.onSetMessages(newMessageObj);

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
