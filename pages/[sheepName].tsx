import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../styles/Chat.module.css';

export default () => {
  const router = useRouter();

  const { sheepName } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
      </main>
    </div>
  );
};
