import mongoose from "mongoose";

async function connectDb(mongoUri) {

  try {

    await mongoose.connect(mongoUri)
    console.log("DataBase connected")

  } catch (error) {
    console.log("Database connection error", error.message)
    process.exit(1)
  }
}

export default connectDb
