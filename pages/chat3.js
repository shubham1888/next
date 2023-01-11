import Head from 'next/head';
import io from 'socket.io-client';
import { useState, useEffect } from 'react'

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to the server using socket.io
        const socket = io('http://localhost:5000');

        // Set up event listeners
        socket.on('new message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        setSocket(socket);
    }, []);

    function handleSendMessage(e) {
        e.preventDefault();
        socket.emit('send message', message);
        setMessage('');
    }

    return (
        <div>
            <Head>
                <title>My Chat App</title>
            </Head>
            <h1>My Chat App</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-black"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
