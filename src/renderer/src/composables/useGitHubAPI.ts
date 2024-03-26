import { Octokit } from '@octokit/core'
const octokit = new Octokit({ auth: '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' })

export default function useGitHubAPI() {
  const getIssues = (repo: string, page: number) =>
    octokit
      .request('GET /repos/{owner}/{repo}/issues', {
        owner: 'vuejs',
        repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        per_page: 20,
        page
      })
      .then((d) => {
        return d.data
      })
      .catch((e) => {
        console.error(e)
        return []
      })

  const getIssue = (id: string) =>
    octokit
      .request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: 'vuejs',
        repo: 'core',
        issue_number: parseInt(id),
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      .then((d) => {
        console.log(d)
        return d.data
      })
      .catch((e) => {
        console.error(e)
        return []
      })

  return {
    getIssues,
    getIssue
  }
}
