import React from 'react';

const MessagesForm = props => {

  return (
    <>
      <form
        className='form'
        onSubmit={props.submitMessageHandler}
      >
        <div className='input-block'>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id='author'
            value={props.authorVal}
            name='author'
            onChange={props.inputChangeHandler}
          />
        </div>
        <div className='input-block'>
          <label htmlFor="message">Message:</label>
          <input
            className='message'
            type="text"
            id='message'
            value={props.messageVal}
            name='message'
            onChange={props.inputChangeHandler}
          />
        </div>
        <button className='btn'>Post</button>
      </form>
    </>
  );
};

export default MessagesForm;