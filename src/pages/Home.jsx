import { Navegation } from '../components/Navegation';
import styles from '../assets/css/Home.module.css';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <Navegation />
            <div className={styles.title}>
                <div>
                    <h2>Cesar Hidalgo Rojas</h2>
                    <p className={styles.text}>Take-Home Test</p>
                </div>
                <div>
                    <Link to='./history'>
                        <button className={styles.cssbutton}>
                            <span>Get Started</span>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 4v16l13 -8z" />
                                    </svg>
                                </li>
                            </ul>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}