import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default () => {
  return (
    <>
      <div className={styles.grid}>
        <Link href='/lavender' className={styles.card}>
          <h3>Lavender &rarr;</h3>
        </Link>
      </div>
    </>
  );
};
