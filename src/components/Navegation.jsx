import styles from '../assets/css/Navegation.module.css';
import { Link } from 'react-router-dom';

export function Navegation() {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <h4 className={styles.title}>History Commit</h4>
            </Link>
            <nav className={styles.nav}>
                <ul className={`${styles.listNav} ${styles.navUl}`} id="navUl">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='./history'>
                            History
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}