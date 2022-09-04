import styles from '../styles/Home.module.css';
import { usePersistedState } from '../hooks/usePersistedState';
import LambList from '../components/LambList';

export default function Home() {
  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>(
    'darkModeOn',
    true
  );

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setDarkModeOn(target.checked);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>woolhome</h1>

        <div className={styles.grid}>
          <LambList></LambList>
        </div>
      </main>
    </div>
  );
}
