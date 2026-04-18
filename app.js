import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import ejs from "ejs";
import connectDB from "./config/db.js";
import Message from "./models/message.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
    const messages = await Message.find();
    res.render("index", {messages});
});

io.on("connection", async (socket) => {
    socket.on("chat message", async (msg) => {
        let message;
        try {
            message = await Message.create({ message: msg });
        } catch(err) {
            console.log("Failed to insert message in DB", err);
            return;
        }
        io.emit("chat message", {
            id: message._id,
            text: message.message
        });
    });
});

const port = process.env.PORT;
const start = () => {
    server.listen(port, () => {
        console.log(`server running at http://localhost:${port}`);
    });
    connectDB();
}
start();

