<script setup lang="ts">
import useGitHubAPI from '../composables/useGitHubAPI'
import TableRow from '@renderer/components/TableRow.vue'

const { getIssues } = useGitHubAPI()

const issues = await getIssues('core')
</script>
<template>
  <div class="it-issues">
    <TableRow
      v-for="(issue, index) in issues"
      :id="issue.id"
      :key="issue.id"
      :stripe="index % 2 === 0 ? 'even' : 'odd'"
      :state="issue.state"
      :title="issue.title"
      :comments="issue.comments"
      :created-at="issue.created_at"
      :user="issue.user"
      :labels="issue.labels"
    />
  </div>
</template>
<style lang="scss">
.it-issues {
  @apply py-8;
}
</style>
