/*
    THIS IS JUST A DOODLE PAGE
    YOU CAN USE THIS TO TEST AND EXPERIMENT WITH DIFFERENT THING
    IT'S A PLAY GROUND

*/


import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'me' }]);
      setInput('');
    }
  };

  const handleReceive = (message) => {
    setMessages([...messages, { text: message, sender: 'recipient' }]);
  };

  return (
    <div className="chat-app">

        
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'me' ? 'me' : 'recipient'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>


      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
