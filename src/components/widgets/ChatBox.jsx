import { useState, useEffect } from 'react';
import axios from 'axios';

function ChatBox() {
  let localStorageChats = localStorage.getItem('messageDatabase') ? JSON.parse(localStorage.getItem('messageDatabase')) : [];
  const [input, setInput] = useState('');
  const [messageDatabase, setMessageDatabase] = useState(localStorageChats);

  const headers = {
    'accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  };

  const sendMessage = async () => {
    const url = 'http://api.ayoba.me/v1/business/message';
    const data = {
      msisdns: ['+27646569280'],
      message: {
        type: 'text',
        text: `${input}`,
      },
    };

    try {
      const response = await axios.post(url, data, { headers });
      let responseArr = response.data;
      console.log('Message sent successfully:', response.data);

      let text_to_id_obj = {};
      text_to_id_obj[responseArr[0].messageId] = input;
      console.log(text_to_id_obj);
      await messagesObj(response.data, text_to_id_obj, responseArr[0].messageId);
      setInput(''); // Clear the input box after sending the message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const messagesObj = async (sentMessage = [], text_to_id_obj = {}, inputCorrelationId = '') => {
    try {
      const receivedMessagesResponse = await axios.get('http://api.ayoba.me/v1/business/message', { headers });

      const sentMessages = sentMessage;
      const tempResponse = receivedMessagesResponse.data;
      const receivedMessages = tempResponse.filter(item => item.message.type !== 'displayed');

      const formattedMessages = sentMessages.reduce((acc, { msisdn, messageId }) => {
        const formattedMsisdn = msisdn.replace('+', '');

        if (!acc[formattedMsisdn]) {
          acc[formattedMsisdn] = [];
        }

        const messageText = receivedMessages.find(
          receivedMsg => receivedMsg.message.correlationId && receivedMsg.message.correlationId.includes(inputCorrelationId) && (receivedMsg.message.type !== 'displayed')
        )?.message.text || text_to_id_obj[inputCorrelationId];

        acc[formattedMsisdn].push({ id: messageId, message: messageText, from: 'sender' });

        return acc;
      }, {});

      receivedMessages.forEach(({ msisdn, message }) => {
        if (message.type !== 'text') return;

        const formattedMsisdn = msisdn.replace('+', '');

        if (!formattedMessages[formattedMsisdn]) {
          formattedMessages[formattedMsisdn] = [];
        }

        formattedMessages[formattedMsisdn].push({ id: message.id, message: message.text, from: 'receiver' });
      });

      let x = JSON.parse(localStorage.getItem('messageDatabase'));
      if (x) {
        for (const key in formattedMessages) {
          if (formattedMessages.hasOwnProperty(key)) {
            if (x.hasOwnProperty(key)) {
              x[key] = x[key].concat(formattedMessages[key]);
            } else {
              x[key] = formattedMessages[key];
            }
          }
        }
        setMessageDatabase(x);
        localStorage.setItem('messageDatabase', JSON.stringify(x));
      } else {
        localStorage.setItem('messageDatabase', JSON.stringify(formattedMessages));
        setMessageDatabase(formattedMessages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleRefresh = async () => {
    await messagesObj();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRefresh();
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <div className="container">
        <div style={{ borderRadius: "10px", height: "500px", padding: "2rem", overflow: 'scroll' }}>
          <div className="chat-window">
            {messageDatabase['27646569280'] && (
              <>
                {messageDatabase['27646569280'].map((msg, index) => (
                  msg.from ? (
                    <div key={index} className={`message ${msg.from}`}>
                      {msg.message}
                    </div>
                  ) : null
                ))}
              </>
            )}
          </div>
        </div>

        <div className="input-box">
          <input
            placeholder='Type your message here ...'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>
            <svg fill="none" height="25" viewBox="0 0 20 20" width="25" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="m1.7539.135306 17.6387 8.924704c.5699.28838.7753.94299.4586 1.46209-.107.1755-.2659.3202-.4586.4177l-17.6387 8.9247c-.56996.2884-1.288692.1014-1.605335-.4177-.0974342-.1598-.148565-.2641-.148565-.4468v-7l11-2-11-2v-6.9248c0-.593816.528556-1.0752 1.18056-1.0752.20063 0 .39795.0465676.57334.135306z" fill="#1f74d6" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
