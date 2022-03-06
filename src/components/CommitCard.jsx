import styles from '../assets/css/CommitCard.module.css';

export function CommitCard({ sha, commit: { author: { name } }, commit: { message }, commit: { author: { date } } }) {
    return (
        <li className={styles.CommitCard}>
            <p>
                <b>ID: </b> {sha.substring(0, 7)}
            </p>
            <p>
                <b>Author:</b> {name}
            </p>
            <p>
                <b>Commit:</b> {message}
            </p>
            <p>
                <b>Date: </b> {date}
            </p>
        </li>
    );
}