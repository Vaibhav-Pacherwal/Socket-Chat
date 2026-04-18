import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: { type: String }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);
export default Message;