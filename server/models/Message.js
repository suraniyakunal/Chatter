import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  // For private messages
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },

  // For room messages
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', default: null },

  type: { type: String, enum: ['private', 'room'], required: true },

  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

export default Message
