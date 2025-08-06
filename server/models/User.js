import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  _id: ObjectId,
  userId: { type: String, required: true },
  username: { type: String, required: true },
  onlineStatus: true
})

const Users = mongoose.model('Users', usersSchema)

export default Users

