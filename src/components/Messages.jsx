import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css'

export default function Messages({ messages }) {
  
  return (
    <>
      <h2>Last messages: </h2>
      <div className='messages'>
        {messages.slice(-3).reverse().map((message, i) =>
          <p key={i} className={message.premium ? 'is-premium' : ''}>
            <strong>{message.sender}</strong>:<br/>
            {message.text}
            <p>Time: {(new Date(parseInt(message.time)/1000000)).toUTCString()}</p>
            <br></br>
          </p>
        )}
      </div>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};