import { Socket } from "socket.io";

module.exports = (socket: Socket) => {
    console.log('A user connected');
};