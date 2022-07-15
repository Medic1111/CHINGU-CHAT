import "./LoginForm.css";

function LoginForm({
  socket,
  setIsLoggedIn,
  roomId,
  setRoomId,
  username,
  setUsername,
}) {
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
      <div className="container">
        <h1>Chingu Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />
          <input
            type="text"
            id="roomId"
            name="roomId"
            placeholder="room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
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
