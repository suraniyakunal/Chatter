
export default function handleChatEvents(socket, io, users) {

  socket.on('set-username', (username) => {
    const name = username
    // if (typeof name !== String || name.trim() === '') {
    //   console.log('Invalid username received');
    // }

    socket.username = name
    users.set(name, { id: socket.id, name: name })
    // console.log(`Welcome ${socket.username}`)


    io.emit('online-users', Array.from(users.values()))

  })


  socket.on('global-chat', (mssg) => {
    io.emit('global-chat', { message: mssg, from: socket.username })
  })
  //
  // socket.on('joinRoom', ({ room }) => {
  //   socket.join(room)
  // })

  socket.on('disconnect', () => {
    users.delete(socket.username);
    // console.log(`${socket.username} disconnected with id:`, socket.id)
    io.emit('online-users', Array.from(users.values()));
  })
}



