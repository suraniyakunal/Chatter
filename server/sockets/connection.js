import socket from './socket.js'
import handleChatEvents from './socket.js'

export default function makeSocketIoConnection(io) {
  try {
    io.on('connection', (socket) => {
      console.log(`The new user is connected waiting for the username`, socket.id)
      handleChatEvents(socket, io)
    })
  } catch (error) {
    console.log("there is some problem ", error)
  }

}


