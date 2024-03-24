<script setup lang="ts">
import { components } from '@octokit/openapi-types'
import dayjs from 'dayjs'

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
const showDetail = (id: number) => {
  console.log(`Show detail for issue ${id}`)
}

const stateToRingColor = (state: string) => {
  return state === 'open' ? 'ring-green-500' : 'ring-red-500'
}
</script>
<template>
  <div class="it-row" :class="props.stripe" :data-id="props.id" @click="showDetail(props.id)">
    <div class="self-center">
      <img
        class="w-10 h-10 p-1 rounded-full ring-1"
        :class="stateToRingColor(props.state)"
        :src="props.user?.avatar_url"
        alt="Rounded avatar"
      />
    </div>
    <div>
      <div class="text-lg">{{ props.title }}</div>
      <span
        v-for="label in labels"
        :key="label.id"
        class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-black inline-block"
        :style="`background-color: #${label.color};`"
        >{{ label.name }}</span
      >
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
  @apply bg-gray-800;
  @apply hover:bg-gray-700;
}

.even {
  @apply bg-gray-600;
  @apply hover:bg-gray-500;
}

.it-row {
  @apply grid grid-cols-[88px_auto_max-content] mx-8 px-8 items-stretch py-3 border-b-2 border-gray-800 shadow-lg shadow-slate-700;
  @apply hover:shadow-2xl hover:cursor-pointer hover:shadow-slate-400  hover:relative;
}
</style>
