module.exports = io => {
  console.log("Socketio listening...");

  io.on("connection", socket => {
    console.log(`A user connected with id: ${socket.id}`);
    let messages = [];
    socket.on("message", data => {
      socket.broadcast.emit("message", data);
    });
  });
};
