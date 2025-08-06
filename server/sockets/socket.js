
export default function handleChatEvents(socket, io) {

  socket.on('set-username', async ({ username }) => {
    const name = await username
    if (typeof name !== String || name.trim() === '') {
      console.log('Invalid username received');

    } else {
      alert("socket name is not set yet")
    }

    socket.username = name
    console.log(`your username is set to ${socket.username}`)
    alert(`Welcome ${socket.username}`)
  })
  socket.on('privateChat', (chat) => {

  })

  socket.on('joinRoom', (room) => {

  })

  socket.on('disconnect', () => {
    console.log(`${socket.username} disconnected with id:`, socket.id)
  })
}



