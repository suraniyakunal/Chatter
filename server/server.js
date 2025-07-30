import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(express.json())
dotenv.config()

//routes
app.get('/',(req,res)=>{
  res.send("The server is working")
})

//running server
app.listen(port,()=>{console.log(`The server is running on port ${port}`)})
