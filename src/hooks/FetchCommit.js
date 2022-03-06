import { useEffect, useState } from "react";
import { Commits } from '../helpers/Commits';

export const FetchCommit = () => {
    const [commits, setCommits] = useState({ commits: [] });

    useEffect(() => {
        let stage = true;
        Commits(commits).then(({ data }) => {
            if (stage) {
                setCommits({
                    commits: data
                })
            }
        })
        return () => stage = false;
    }, []);

    return commits;
}