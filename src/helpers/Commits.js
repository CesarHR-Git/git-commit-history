import { Octokit } from "@octokit/core";

export const Commits = async () => {
    const octokit = new Octokit();
    const result = await octokit.request("GET /repos/CesarHR-Git/git-commit-history/commits");
    return result;
}