import { createContext, useState } from "react";

export const userCtx = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  messages: [],
  setMessages: () => {},
  onSetMessages: (objMsg) => {},
  roomId: "",
  username: "",
  setRoomId: () => {},
  onSetRoomId: (string) => {},
  setUsername: () => {},
  onSetUsername: (string) => {},
});

const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const onSetMessages = (objMsg) => {
    return setMessages((prev) => [...prev, objMsg]);
  };

  const onSetRoomId = (string) => setRoomId(string);

  const onSetUsername = (string) => setUsername(string);

  return (
    <userCtx.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        messages,
        setMessages,
        onSetMessages,
        username,
        roomId,
        setUsername,
        setRoomId,
        onSetRoomId,
        onSetUsername,
      }}
    >
      {props.children}
    </userCtx.Provider>
  );
};

export default UserProvider;
