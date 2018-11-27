import React from 'react';
import './ChatLog.css';

import Message from './Message';

const ChatLog = (props) => {

  const chatLog = props.log.map((message) => {
    return <Message name={message.sender} body={message.body} timeStamp = {message.timeStamp} />
  });

  return (
    <section class="chat-log chat-entry local">
      {chatLog}
    </section>
  );
};


export default ChatLog;
