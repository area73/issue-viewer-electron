<script setup lang="ts">
import useGitHubAPI from '../composables/useGitHubAPI'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { components } from '@octokit/openapi-types'
import { VueMarkdownIt } from '@f3ve/vue-markdown-it'
import { figure } from '@mdit/plugin-figure'
import mila from 'markdown-it-link-attributes'
import ins from 'markdown-it-ins'
import mdCodeBlock from 'markdown-it-code-block'

const { getIssue } = useGitHubAPI()
const route = useRoute()
const router = useRouter()
const post = ref<components['schemas']['issue']>()

const options = {
  html: true,
  linkify: true
}

onMounted(async () => {
  const issue = typeof route.params.id === 'string' ? route.params.id : route.params.id[0]
  const detail = await getIssue(issue)
  post.value = detail as components['schemas']['issue']
})
</script>
<template>
  <div class="it-issues-detail">
    <div class="grid grid-cols-[auto_30px] pb-4 pt-6 px-4 sticky top-[0px] z-20 bg-gray-800">
      <h2 class="inline text-lg font-medium">{{ post?.title }}</h2>
      <span>
        <button
          type="button"
          class="border border-gray-500 text-white focus:ring-4 focus:outline-none font-medium text-sm p-2 text-center inline-flex items-center bg-gray-900 hover:bg-gray-700 focus:ring-teal-800"
          @click="router.back()"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            ></path>
          </svg>
          <span class="sr-only">Previous pagination</span>
        </button>
      </span>
    </div>
    <div class="py-12 px-10 bg-gray-900">
      <vue-markdown-it
        :source="post?.body || ''"
        :options="options"
        preset="commonmark"
        :plugins="[
          mdCodeBlock,
          figure,
          ins,
          [mila, { attrs: { target: '_blank', rel: 'noopener' } }]
        ]"
      />
    </div>
  </div>
</template>
<style lang="scss">
.it-issues-detail {
  @apply p-8 pt-0;
}
</style>
