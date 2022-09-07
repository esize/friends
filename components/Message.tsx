import Link from 'next/link';
import Image from 'next/image';
import sheeplist from '../sheeplist';
import styles from '../styles/Chat.module.css';
import { text } from 'stream/consumers';

type MessageProps = {
  text: string;
  isMe: boolean;
};

export default (props: MessageProps) => {
  const { text, isMe } = props;
  return (
    <div className={isMe ? styles.messageSent : styles.messageReceived}>
      <p>{text}</p>
    </div>
  );
};
