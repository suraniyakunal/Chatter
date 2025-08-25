
export default function handleChatEvents(socket, io) {

  const users = []

  socket.on('set-username', async (username) => {
    const name = await username
    // if (typeof name !== String || name.trim() === '') {
    //   console.log('Invalid username received');
    // }

    socket.username = name
    // users.set(socket.id, { id: socket.id, name: socket.username })
    users.push(socket.username)

    console.log(`Welcome ${socket.username}`)
  })

  console.log(users)

  io.emit('online-users', users)

  socket.on('global-chat', ({ room, message }) => {
    // io.to(room).emit(message)
  })
  //
  // socket.on('joinRoom', ({ room }) => {
  //   socket.join(room)
  // })
  //
  socket.on('disconnect', () => {
    console.log(`${socket.username} disconnected with id:`, socket.id)
  })
}



