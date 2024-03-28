import { Octokit } from '@octokit/core'

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN })

const owner = 'vuejs'
const repo = 'core'

export default function useGitHubAPI() {
  const getIssues = (page: number) =>
    octokit
      .request('GET /repos/{owner}/{repo}/issues', {
        owner,
        repo,
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
        owner,
        repo,
        issue_number: parseInt(id)
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
