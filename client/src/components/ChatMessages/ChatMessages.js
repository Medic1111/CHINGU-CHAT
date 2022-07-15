import "./ChatMessages.css";
import { useContext } from "react";
import { userCtx } from "../../store/user-ctx";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatMessages() {
  const ctx = useContext(userCtx);

  return (
    <div className="ChatMessages">
      <ScrollToBottom className="scroll">
        <ul className="messageList">
          {ctx.messages.map((message, index) => {
            if (message.type === "message") {
              return (
                <div key={`Message_${index}`}>
                  <li
                    className={
                      ctx.username === message.username
                        ? "message message-self flex-end"
                        : "message"
                    }
                  >
                    {message.message}
                  </li>
                  <li
                    className={
                      ctx.username === message.username
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
      </ScrollToBottom>
    </div>
  );
}

export default ChatMessages;
