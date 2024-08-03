import mongoose from "mongoose";
const CONNECT = process.env.CONNECT;

export const connectDB = async () => {
  await mongoose.connect(
    CONNECT
  ).then(() => console.log("DB connected"))
}