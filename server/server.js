import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import http from 'http'
import { Server } from 'socket.io'
import handleChatEvents from './sockets/socket.js'
import mongoose from 'mongoose'
import Users from './models/User.js'


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: '*' }
})

//middlewares
app.use(express.json())
dotenv.config({ path: './configs/.env' })
app.use(cors())

const port = process.env.PORT
const MONGO_URI = process.env.MONGO_URI


//routes
app.get('/', (req, res) => {
  res.send("The server is working")
})

//socket io connection
io.on('connection', (socket) => {
  console.log("The new user is connected", socket.id)
  handleChatEvents(socket, io)
})

//Database connection in Mongodb
mongoose.connect(MONGO_URI)
  .then(() => { console.log("The database is connected") })
  .catch((error => { console.log("some error in connection", error) }))

//running server
server.listen(port, () => { console.log(`The server is running on port ${port}`) })
