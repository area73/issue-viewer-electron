<script setup lang="ts">
import { components } from '@octokit/openapi-types'
import dayjs from 'dayjs'
import { VueMarkdownIt } from '@f3ve/vue-markdown-it'
import { full as emoji } from 'markdown-it-emoji'

export interface Props {
  stripe: 'even' | 'odd'
  state: string
  title: string
  comments: number
  createdAt: string
  id: number
  user: components['schemas']['nullable-simple-user']
  labels: components['schemas']['label'][]
}
const props = defineProps<Props>()

const formatDate = (dateString: string) => {
  const date = dayjs(dateString)
  return date.format('dd MMMM D, YYYY')
}

const stateToRingColor = (state: string) => {
  return state === 'open' ? 'ring-green-500' : 'ring-red-500'
}
</script>
<template>
  <div class="it-row" :class="props.stripe" :data-id="props.id">
    <div class="self-center">
      <img
        class="w-10 h-10 p-1 rounded-full ring-1"
        :class="stateToRingColor(props.state)"
        :src="props.user?.avatar_url"
        alt="Rounded avatar"
      />
    </div>
    <div>
      <div class="text-base font-medium">{{ props.title }}</div>
      <span
        v-for="label in labels"
        :key="label.id"
        class="labels"
        :style="`background-color: #${label.color};`"
        ><vue-markdown-it :source="label.name || ''" preset="commonmark" :plugins="[emoji]"
      /></span>
      {{ props.comments }}
      <img src="/src/assets/comments.svg" class="w-5 h-5 inline" alt="comments" />
    </div>
    <div class="text-xs italic">
      {{ formatDate(props.createdAt) }}
    </div>
  </div>
</template>
<style lang="scss">
.odd {
  @apply bg-gray-700;
  @apply hover:bg-gray-900;
}

.even {
  @apply bg-gray-800;
  @apply hover:bg-gray-900;
}

.it-row {
  @apply grid grid-cols-[88px_auto_max-content] mx-8 px-8 items-stretch py-3 border-b-2 border-gray-800;
  @apply hover:cursor-pointer hover:relative;
}

.labels {
  @apply text-xs font-medium me-2 px-2.5 py-0 rounded inline-block mt-2;
  p {
    @apply text-xs font-medium text-black leading-5;
  }
}
</style>
