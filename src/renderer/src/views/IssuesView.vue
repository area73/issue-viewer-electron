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
const transitionClass = ref('')

onMounted(() => {
  fetchIssues()
})

const fetchIssues = async () => {
  transitionClass.value = 'fade-out'
  issues.value = await getIssues(page.value)
  transitionClass.value = 'fade-in'
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
    <div :class="transitionClass">
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
        :labels="issue.labels as components['schemas']['label'][]"
        @click="showDetail(issue.number)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.fade-in {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.it-issues {
  @apply py-8;

  &__header {
    @apply font-semibold mx-8 p-2 grid grid-cols-[auto_max-content] items-center;
    @apply sticky top-[0px] z-20;
    @apply bg-gray-800 border-b border-gray-700;

    &-title {
      @apply text-xl;
    }
  }
}
</style>
