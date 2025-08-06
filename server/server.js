import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import http from 'http'
import { Server } from 'socket.io'
import makeSocketIoConnection from './sockets/connection.js'
import connectDb from './database/connect.js'


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: '*' }
})

//middlewares
app.use(express.json())
dotenv.config({ path: './configs/.env' })
app.use(cors())

const port = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI


//routes
app.get('/', (req, res) => {
  res.send("The server is working")
})

//socket io connection
makeSocketIoConnection(io, { username })

//Database connection in Mongodb
// connectDb(MONGO_URI)

//running server
server.listen(port, () => { console.log(`The server is running on port ${port}`) })



