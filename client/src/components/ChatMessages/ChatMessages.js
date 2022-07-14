import "./ChatMessages.css";

function ChatMessages({ messages, username }) {
  return (
    <div className="ChatMessages">
      <ul className="messageList">
        {messages.map((message, index) => {
          if (message.type === "message") {
            return (
              <div key={`Message_${index}`}>
                <li
                  className={
                    username === message.username
                      ? "message message-self flex-end"
                      : "message"
                  }
                >
                  {message.message}
                </li>
                <li
                  className={
                    username === message.username
                      ? "message-info flex-end"
                      : "message-info"
                  }
                >
                  {message.username} - {message.time}
                </li>
              </div>
            );
          } else if (message.type === "join-info") {
            return (
              <div key={`Join_Info_${index}`}>
                <li className="join-info">{message.content}</li>
              </div>
            );
          } else {
            return (
              <div key={`other_${index}`}>
                <li className="join-info">{message.content}</li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ChatMessages;
