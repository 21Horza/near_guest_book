import React from 'react';
import friends from '../images/hi.png';
import styles from './signIn.css';

export default function SignIn() {
  return (
    <div>
      <p>
          Hello, friend!
      </p>
      <p>
          Here is our next step!
          NEAR team is glad to meet you :)
      </p>
      <p>
          Go ahead and sign in to leave a message!
      </p>
      <img src={friends}></img>
    </div>
    
  );
}
