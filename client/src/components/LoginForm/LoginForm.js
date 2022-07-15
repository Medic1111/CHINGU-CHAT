import "./LoginForm.css";
import { userCtx } from "../../store/user-ctx";
import { useContext } from "react";

function LoginForm({ socket }) {
  const ctx = useContext(userCtx);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: ctx.username,
      roomId: ctx.roomId,
    };
    socket.emit("JOIN_ROOM", data);
    ctx.setIsLoggedIn(true);
  };

  return (
    <div className="LoginForm">
      <div className="container">
        <h1>Chingu Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={ctx.username}
            onChange={(e) => ctx.onSetUsername(e.target.value)}
            autoComplete="off"
            required
          />
          <input
            type="text"
            id="roomId"
            name="roomId"
            placeholder="room ID"
            value={ctx.roomId}
            onChange={(e) => ctx.onSetRoomId(e.target.value)}
            autoComplete="off"
            required
          />
          <input type="submit" value="ENTER" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
