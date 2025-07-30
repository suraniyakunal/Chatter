
export default function handleChatEvents(socket, io) {
  socket.on('privateChat', (chat) => {

  })

  socket.on('joinRoom', (room) => {

  })

  socket.on('disconnect', () => {
    console.log("The user disconnected with id:", socket.id)
  })
}



