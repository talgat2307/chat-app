import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage, postMessage } from '../store/actions';
import MessagesForm from '../components/MessagesForm';
import MessageList from '../components/MessagesList';

const Chat = () => {

  const chatList = useSelector(state => state.data);
  const dispatch = useDispatch();

  const [message, setMessage] = useState({
    author: '',
    message: '',
  });

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch, message]);

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMessage(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitMessageHandler = (e) => {
    e.preventDefault();
    dispatch(postMessage(message));

    setMessage({
      author: '',
      message: '',
    });
  };

  return (
    <div>
      <MessagesForm
        inputChangeHandler={(e) => inputChangeHandler(e)}
        authorVal={message.author}
        messageVal={message.message}
        submitMessageHandler={(e) => submitMessageHandler(e)}
      />
      {chatList.map(message => {
        return (
          <MessageList
            key={message.id}
            author={message.author}
            message={message.message}
            date={message.datetime}
          />
        );
      })}
    </div>
  );
};

export default Chat;