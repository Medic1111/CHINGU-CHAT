import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, roomId);
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
