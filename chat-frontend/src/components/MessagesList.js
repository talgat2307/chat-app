import React from 'react';

const MessageList = props => {
  return (
    <div className='MessageList'>
      <div className='chat-block'>
        <p className='chat-head'>
          <span className='chat-author'>{props.author}</span>
          <span className='chat-date'>{props.date}</span>
        </p>
        <p className='chat-body'>{props.message}</p>
      </div>
    </div>
  );
};

export default MessageList;