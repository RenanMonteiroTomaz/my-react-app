import React, { useState } from 'react';
import './Chat.css';

function Chat({ username }) {
  const [messages, setMessages] = useState([
    { user: 'Atendente', text: 'Olá Sr. Blabla' },
    { user: 'Atendente', text: 'Blabla blabla blabla?' },
    { user: 'Você', text: 'Blablaaaa Bla' },
    { user: 'Você', text: 'Bla blabla Ba' },
    { user: 'Atendente', text: 'KKKKKKKKKKK blabla?' },
    { user: 'Atendente', text: 'Blabla Blaaba' },
  ]);

  const [message, setMessage] = useState('');

  const addMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { user: 'Você', text: message }]);
      setMessage('');
    }
  };

  return (
    <div id="chat-screen">
      <header>
        <h2>Atendimento On-line</h2>
      </header>
      <div id="lista-conversa" className="messages-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-item ${
              msg.user === 'Você' ? 'message-user' : ''
            }`}
          >
            <div className="msg-user">
              <strong>{msg.user} diz:</strong>
            </div>
            <div className="msg-chat">{msg.text}</div>
          </div>
        ))}
      </div>
      <form id="form-chat-send" onSubmit={addMessage}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default Chat;