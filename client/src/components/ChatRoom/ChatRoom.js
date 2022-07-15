import "./ChatRoom.css";
import { useContext } from "react";
import { userCtx } from "../../store/user-ctx";
import ChatForm from "../ChatForm/ChatForm";
import ChatMessages from "../ChatMessages/ChatMessages";

function ChatRoom({ socket }) {
  const ctx = useContext(userCtx);

  return (
    <div className="ChatRoom">
      <h1 className="title">{`Room #${ctx.roomId}`}</h1>
      <ChatMessages />
      <ChatForm socket={socket} />
    </div>
  );
}

export default ChatRoom;
