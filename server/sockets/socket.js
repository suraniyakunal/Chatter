
export default function handleChatEvents(socket, io) {

  const users = new Map()

  socket.on('set-username', async (username) => {
    const name = await username
    // if (typeof name !== String || name.trim() === '') {
    //   console.log('Invalid username received');
    // }

    socket.username = name
    users.set(socket.username)
    console.log(users)
    console.log(`Welcome ${socket.username}`)
  })
  socket.on('privateChat', ({ room, message }) => {
    io.to(room).emit(message)
  })

  socket.on('joinRoom', ({ room }) => {
    socket.join(room)
  })

  socket.on('disconnect', () => {
    console.log(`${socket.username} disconnected with id:`, socket.id)
  })
}



