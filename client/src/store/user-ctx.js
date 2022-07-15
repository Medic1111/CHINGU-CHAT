import { createContext, useState } from "react";

export const userCtx = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  messages: [],
  setMessages: () => {},
  onSetMessages: (objMsg) => {},
});

const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  const onSetMessages = (objMsg) => {
    return setMessages((prev) => [...prev, objMsg]);
  };

  return (
    <userCtx.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        messages: messages,
        setMessages: setMessages,
        onSetMessages: onSetMessages,
      }}
    >
      {props.children}
    </userCtx.Provider>
  );
};

export default UserProvider;
