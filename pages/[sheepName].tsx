import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/Chat.module.css';
import { useRef, useState, useEffect } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import Message from '../components/Message';
import { networkInterfaces } from 'os';
import sheeplist from '../sheeplist';

export default () => {
  const router = useRouter();
  const [messageText, setMessageText] = useState('');
  const sheepName = router.query.sheepName as string;
  const [messages, setMessages] = usePersistedState(sheepName, [] as any);

  type MessageType = {
    id: string;
    isMe: boolean;
    text: string;
  };

  const bottomRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const sendMessage = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessage = {
      id: uuidv4(),
      text: messageText,
      isMe: true,
      created: new Date(),
    };

    const possibleResponses = sheeplist.filter(
      (sheep) => sheep.name == sheepName
    )[0]['responses'];

    const randomResponse =
      possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

    const response = {
      id: uuidv4(),
      text: randomResponse,
      isMe: false,
      created: new Date(),
    };

    const newSetMessages = [...messages, newMessage, response];

    setMessages(newSetMessages);

    setMessageText('');
  };

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <nav className={styles.nav}>
          <div className={styles.link}>
            <Link href='/' className={styles.back} passHref>
              <a>&larr; Go Baaack</a>
            </Link>
          </div>

          <div className={styles.profile}>
            <div className={styles.center}>
              <h3>{sheepName}</h3>
            </div>
            <img
              src={'/profiles/' + sheepName + '.jpg'}
              width='35px'
              height='35px'
              className={styles.circle}
            />
          </div>
        </nav>
      </div>
      <main className={styles.main}>
        <div>
          {messages &&
            messages.map((msg: MessageType) => (
              <Message key={msg.id} text={msg.text} isMe={msg.isMe} />
            ))}

          <div ref={bottomRef} />
        </div>
      </main>
      <form className={styles.form} onSubmit={sendMessage}>
        <input
          type='text'
          name='message'
          id='message'
          required
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className={styles.textBox}
        />

        <button type='submit' className={styles.button}>
          🐑
        </button>
      </form>
    </div>
  );
};
