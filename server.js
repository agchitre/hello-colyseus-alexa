import { Server, Room } from "colyseus";
import {WebSocketTransport} from "@colyseus/ws-transport"
import express from "express";
import cors from "cors";
import http from "http";
import ChatRoom from "./chatRoom.js";



// configure port
const port = process.env.port || 3000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//create game server
const gameServer = new Server({
    transport: new WebSocketTransport({
        server: http.createServer(app)
    })
});

//Create a room
gameServer.define("test", ChatRoom);

//setup public folder
app.use(express.static("public"))

//listen
gameServer.listen(port);