import Link from 'next/link';
import Image from 'next/image';
import sheeplist from '../sheeplist';
import styles from '../styles/Home.module.css';

export default () => {
  return (
    <>
      {sheeplist.map((sheep) => {
        return (
          <div className={styles.card}>
            <Link href={sheep.name}>
              <div className={styles.row}>
                <div className={styles.columnImg}>
                  <Image
                    src={'/profiles/' + sheep.name + '.jpg'}
                    layout='responsive'
                    width='50px'
                    height='50px'
                    className={styles.profile}
                  />
                </div>
                <div className={styles.column}>
                  <h3>{sheep.name}</h3>
                  <p>
                    this is the latest evany message. BAAAAAAA! Also my name is
                    evan and i am a coder and i go click clikck click
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
