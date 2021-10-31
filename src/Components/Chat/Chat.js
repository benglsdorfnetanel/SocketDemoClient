import React,{useEffect,useState} from "react";
import "./Chat.css";
import ChatBox from "../ChatBox/ChatView";
import ChatMessage from "../ChatMessage/ChatMassage";
import SocketService from "../../Services/SocketService";

const ChatView = () => {
    return (
        <div>
            <div class="grid-container">
                <div><ChatBox /></div>  
                <div><ChatMessage /></div>
            </div>
        </div>
    )
}

export default ChatView;