import React, { useState } from "react";
import chatSocketService from "../../Services/Sockets/chatSocketService";

const ChatMessage = (ChatMassage) => {
    let sendMessage = () => {
        let tmp = `${User} say ${Messsage} `
        chatSocketService.sendMessage(tmp);
    }
    const [Messsage, setMessage] = useState(''); 
    const [User, setUser] = useState(''); 
    return (
        <div>
            <input onChange={(e) => setMessage(e.target.value)} />
            <input onChange={(e) => setUser(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}
export default ChatMessage;