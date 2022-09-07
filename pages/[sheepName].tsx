import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/Chat.module.css';
import { useRef, useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import Message from '../components/Message';
import { networkInterfaces } from 'os';

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

  const dummy = useRef() as React.MutableRefObject<HTMLInputElement>;

  const sendMessage = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessage = {
      id: uuidv4(),
      text: messageText,
      isMe: true,
      created: new Date(),
    };

    const response = {
      id: uuidv4(),
      text: 'BAAAAAAAA',
      isMe: false,
      created: new Date(),
    };

    const newSetMessages = [...messages, newMessage, response];

    setMessages(newSetMessages);

    setMessageText('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
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
      <section className={styles.section}>
        <main className={styles.main}>
          {messages &&
            messages.map((msg: MessageType) => (
              <Message key={msg.id} text={msg.text} isMe={msg.isMe} />
            ))}

          <span ref={dummy}></span>
        </main>
        <form className={styles.form} onSubmit={sendMessage}>
          <input
            type='text'
            name='message'
            id='message'
            autoFocus
            required
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className={styles.textBox}
          />

          <button type='submit' className={styles.button}>
            🐑
          </button>
        </form>
      </section>
    </div>
  );
};
