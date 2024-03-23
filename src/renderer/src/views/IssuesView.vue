<script setup lang="ts">
import useGitHubAPI from '../composables/useGitHubAPI'

const { getIssues } = useGitHubAPI()

const issues = await getIssues('vue')
</script>
<template>
  <h2>IssuesView</h2>
  ssss
  {{ issues }}
</template>
<style></style>
