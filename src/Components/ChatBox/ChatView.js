import React, { useState,useEffect } from "react";
import SocketService from "../../Services/SocketService";
const ChatBox = () => {
    const [Message, setMessage] = useState('');

    useEffect(() => {
        SocketService.listen('reciveMessage').then((data) => setMessage(data));
        console.log("chat " + Message);
    }, [Message])
    
    return (
        <div>{Message}</div>
    );
}
export default ChatBox;