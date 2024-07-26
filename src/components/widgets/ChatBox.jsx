import { useState, React } from 'react';
import avatar from "../../assets/profile-42914_1280.png"

function ChatBox() {

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
    <div>
      <div className="container">
        <div style={{ borderRadius: "10px", height: "500px", padding: "2rem" }}>
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
        </div>

        <div className="input-box">
        <input
          placeholder='Type your message here ...'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}><svg fill="none" height="25" viewBox="0 0 20 20" width="25" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m1.7539.135306 17.6387 8.924704c.5699.28838.7753.94299.4586 1.46209-.107.1755-.2659.3202-.4586.4177l-17.6387 8.9247c-.56996.2884-1.288692.1014-1.605335-.4177-.0974342-.1598-.148565-.2641-.148565-.4468v-7l11-2-11-2v-6.9248c0-.593816.528556-1.0752 1.18056-1.0752.20063 0 .39795.0465676.57334.135306z" fill="#1f74d6" fill-rule="evenodd"/></svg></button>
      </div>

      </div>
    </div>
  )
}

export default ChatBox
