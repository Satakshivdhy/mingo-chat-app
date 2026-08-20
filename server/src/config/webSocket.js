import Message from "../models/messageModel.js";

const OnlineUsers = {}

const WebSocket = (io) => {
    console.log("Socket Connected");

    io.on("connection", (socket) => {

        console.log("User Connected", socket.id);

        socket.on("user:online", (userId) => {
            OnlineUsers[userId] = socket.id; // socket id store in object in Backend
            console.log("Online Users:", OnlineUsers);

            io.emit("users:list Online users", OnlineUsers) // send list of online users to Frontend
        })

        socket.on("user:disconnect", (userId) => {
            delete OnlineUsers[userId];   // user disconnect remove from object
            console.log("Online Users:", OnlineUsers);
            io.emit("users:list Online users", OnlineUsers) // send list of online users to Frontend
        })

        // message send
        // socket.on("send",(payload)=>{
        //     console.log("Payload:",payload);
        //     const newMessage = await Message({
        //         senderId:payload.senderId,
        //         recieverId:payload.recieverId,
        //         message:payload.message,
                
        //     })
        // })

    })

};

export default WebSocket;
