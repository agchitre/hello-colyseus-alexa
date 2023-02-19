import { Room } from "colyseus";

export default class ChatRoom extends Room{

    onCreate(options){
        console.log("Chat Room Created!!!", options);

        this.onMessage("message", (client,data)=>{
            this.broadcast("message", data);
        })
    
    }
    onJoin(client){
        //console.log(`client ${client.sessionId} joined the room`);
        //this.broadcast("message", `${client.sessionId} joined the room`)
    
    }

    onLeave(client){
        console.log(`client ${client.sessionId} left the room`);
        this.broadcast("message", `${client.sessionId} left the room`)
    
    }

    onDispose(options){
        console.log("Chat Room disposed!!!", options);
    }
}