import { useState } from 'react';
console.log('test');
console.log('test 3');

const message1 = {
  from: 'bob',
  text: 'hello',
};

const message2 = {
  from: 'john',
  text: 'hi',
};

const Messages = () => {
  const [message, setMessage] = useState({});

  return (
    <div>
      <button onClick={() => setMessage(message1)}>1</button>
      <button onClick={() => setMessage(message2)}>2</button>

      <ul>
        <li>from: {message.from}</li>
        <li>text: {message.text}</li>
      </ul>
    </div>
  );
};

export default Messages;
