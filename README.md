# Socket Chat 💬

A simple real-time chat application built using **Socket.IO**, **Node.js**, **Express.js**, **MongoDB**, and **EJS**.  
This project was created to understand how real-time communication works using WebSockets.

---

## 🚀 Features

- ⚡ Real-time messaging using Socket.IO
- 💾 Persistent chat history using MongoDB
- 🔄 Auto-update messages without page refresh
- 🎨 Simple EJS-based UI rendering
- 👥 Handles user connection and disconnection
- 📡 Basic message broadcasting system

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript, EJS  
- Backend: Node.js, Express.js  
- Real-time Engine: Socket.IO  
- Database: MongoDB + Mongoose  

---

## 📁 Project Structure
```
socket-chat/
│
├── config/
│   └── db.js             # MongoDB connection
│
├── models/
│   └── message.js        # Message schema
│
├── views/
│   └── index.ejs         # Frontend UI
│
├── node_modules/
├── .env
├── .gitignore
├── app.js                # Main server (Express + Socket.IO)
├── package.json
├── package-lock.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/socket-chat.git
cd socket-chat
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Run the server
```bash
node app.js
```

### 5. Open in browser
```
http://localhost:3000
```

---

## 📌 What I Learned

* How WebSockets work internally
* Real-time communication using Socket.IO
* Event-driven architecture (emit/listen system)
* MongoDB integration for persistent chat storage
* Handling user connections and disconnections in real-time apps
