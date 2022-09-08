import Link from 'next/link';
import Image from 'next/image';
import sheeplist from '../sheeplist';
import styles from '../styles/Home.module.css';
import { get } from 'idb-keyval';

export default () => {
  return (
    <>
      {sheeplist.map((sheep) => {
        return (
          <div className={styles.card} key={sheep.name}>
            <Link href={sheep.name}>
              <div className={styles.row}>
                <div className={styles.columnImg}>
                  <div>
                    <Image
                      src={'/profiles/' + sheep.name + '.jpg'}
                      layout='responsive'
                      width='50px'
                      height='50px'
                      className={styles.profile}
                    />
                  </div>
                </div>
                <div className={styles.column}>
                  <h3>{sheep.name}</h3>
                  <p>I'm so excited to be on woolhome! BAAA!</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
