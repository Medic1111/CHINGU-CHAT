import "./ChatMessages.css";

function ChatMessages({ messages }) {
  return (
    <div className="ChatMessages">
      <ul className="messageList">
        {messages.map((message, index) => {
          return (
            <li className="message" key={`Message_${index}`}>
              {message}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChatMessages;
