import "./ChatRoom.css";
import ChatForm from "../ChatForm/ChatForm";
import ChatMessages from "../ChatMessages/ChatMessages";

function ChatRoom({ socket, messages, setMessages, roomId, username }) {
  return (
    <div className="ChatRoom">
      <h1 className="title">{`Room #${roomId}`}</h1>
      <ChatMessages messages={messages} username={username} />
      <ChatForm
        setMessages={setMessages}
        messages={messages}
        socket={socket}
        roomId={roomId}
        username={username}
      />
    </div>
  );
}

export default ChatRoom;
