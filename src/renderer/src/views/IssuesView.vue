<script setup lang="ts">
import useGitHubAPI from '../composables/useGitHubAPI'
import TableRow from '@renderer/components/TableRow.vue'
import Paginator from '@renderer/components/Paginator.vue'
import { components } from '@octokit/openapi-types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { getIssues } = useGitHubAPI()

const showDetail = async (id: number) => {
  router.push(`/issue/${id}`)
}

const issues = ref<components['schemas']['issue'][]>()
const page = ref(1)

onMounted(() => {
  fetchIssues()
})

const fetchIssues = async () => {
  console.log(page.value)
  issues.value = await getIssues('core', page.value)
}

const nextPage = async () => {
  page.value++
  fetchIssues()
}

const prevPage = async () => {
  if (page.value < 2) return
  page.value--
  fetchIssues()
}
</script>
<template>
  <div class="it-issues">
    <div class="it-issues__header">
      <span class="it-issues__header-title">Issues</span>
      <Paginator
        class="it-issues__header-paginator"
        :title="`Page ${page}`"
        @paginator-minus="prevPage"
        @paginator-plus="nextPage"
      />
    </div>
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
      @click="showDetail(issue.number)"
    />
  </div>
</template>
<style lang="scss">
.it-issues {
  @apply py-8;

  &__header {
    @apply font-semibold mx-8 p-2 grid grid-cols-[auto_max-content] items-center;
    @apply sticky top-[0px] z-20;
    @apply bg-gray-800 border-b border-gray-700;
    &-title {
      @apply text-xl;
    }
    &-paginator {
    }
  }
}
</style>
