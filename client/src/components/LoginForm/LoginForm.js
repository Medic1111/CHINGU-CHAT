import { useState } from "react";

function LoginForm({ socket, setIsLoggedIn, roomId, setRoomId }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: username,
      roomId: roomId,
    };
    socket.emit("JOIN_ROOM", data);
    setIsLoggedIn(true);
  };

  return (
    <div className="LoginForm">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          id="roomId"
          name="roomId"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default LoginForm;
