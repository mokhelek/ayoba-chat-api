
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Chats() {
  
    const [messageDatabase, setMessageDatabase] = useState({});

    useEffect(() => {
      // Fetch sent messages and received messages
      const fetchMessages = async () => {
        try {
          const sentMessagesResponse = await axios.post('http://api.ayoba.me/v1/business/message');
          const receivedMessagesResponse = await axios.get('http://api.ayoba.me/v1/business/message');
          
          const sentMessages = sentMessagesResponse.data;
          const receivedMessages = receivedMessagesResponse.data;
  
          // Create a map to store message text by messageId
          const messageTextMap = receivedMessages.reduce((acc, message) => {
            if (message.message.type === 'text') {
              acc[message.message.id] = message.message.text;
            }
            return acc;
          }, {});
  
          // Transform sent messages into the desired format
          const formattedMessages = sentMessages.reduce((acc, { msisdn, messageId }) => {
            const formattedMsisdn = msisdn.replace('+', '');
  
            if (!acc[formattedMsisdn]) {
              acc[formattedMsisdn] = [];
            }
  
            const messageText = messageTextMap[messageId] || 'Text not available';
            acc[formattedMsisdn].push({ id: messageId, message: messageText });
  
            return acc;
          }, {});
  
          // Add received messages into the database
          receivedMessages.forEach(({ msisdn, message }) => {
            const formattedMsisdn = msisdn.replace('+', '');
  
            if (!formattedMessages[formattedMsisdn]) {
              formattedMessages[formattedMsisdn] = [];
            }
  
            if (message.type === 'text') {
              formattedMessages[formattedMsisdn].push({ id: message.id, message: message.text });
            }
          });
  
          setMessageDatabase(formattedMessages);
          localStorage.setItem('messageDatabase', JSON.stringify(formattedMessages));
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };
  
      fetchMessages();
    }, []);
  
    return (
      <div>
        <h1>Messages</h1>
        <pre>{JSON.stringify(messageDatabase, null, 2)}</pre>
      </div>
    );
  };

export default Chats




