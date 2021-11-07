import io from 'socket.io-client';
class SocketService {
    static socket = io.connect("http://localhost:4000", {query: `user=${sessionStorage.getItem("User") === null? 'empty': sessionStorage.getItem("User")}`});

    static listen(event) {
        return new Promise((resolve, reject) => {
            this.socket.on(event, (data)=> resolve(data));
        });
    }
}

export default SocketService;