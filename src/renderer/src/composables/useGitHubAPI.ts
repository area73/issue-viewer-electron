import { Octokit } from '@octokit/core'
const octokit = new Octokit({ auth: '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' })

export default function useGitHubAPI() {
  const getIssues = (repo: string) =>
    octokit
      .request('GET /repos/{owner}/{repo}/issues', {
        owner: 'vuejs',
        repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
        // state: 'all',
        // per_page: 100,
        // labels: 'bug',
        // milestone: '*',
        // assignee: '*',
        // creator: '*',
        // mentioned: '*',
        // page: 1
      })
      .then((d) => d.data)

  return {
    getIssues
  }
}
