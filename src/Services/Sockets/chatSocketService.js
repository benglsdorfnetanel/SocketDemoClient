import SocketService from '../SocketService';

const socket = SocketService.socket;

const chatSocketService = {
    sendMessage(data){
        socket.emit('new-message', {data});
    },
};

export default chatSocketService;