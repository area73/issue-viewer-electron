<script setup lang="ts">
import useGitHubAPI from '../composables/useGitHubAPI'

const { getIssues } = useGitHubAPI()

const issues = getIssues('vue').then((response) => {
  console.log(response)
})
</script>
<template>
  <h2>IssuesView</h2>
</template>
<style></style>
