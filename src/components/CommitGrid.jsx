import { CommitCard } from "./CommitCard";
import { FetchCommit } from "../hooks/FetchCommit";
import styles from '../assets/css/CommitGrid.module.css';

export function CommitGrid() {
    const { commits } = FetchCommit();

    return (
        <div>
            <h2 className={styles.title}>History of commits</h2>
            <ul className={styles.CommitGrid}>
                {commits.map(commit => {
                    return <CommitCard key={commit.sha} {...commit} />
                })}
            </ul>
        </div>
    );
}