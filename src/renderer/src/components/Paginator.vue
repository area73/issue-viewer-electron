<script setup lang="ts">
const emit = defineEmits(['paginator-plus', 'paginator-minus'])
defineProps<{ title: string }>()
</script>

<template>
  <div class="it-paginator grid-cols-3 grid">
    <span>
      <button type="button" class="it-paginator__button" @click="emit('paginator-minus')">
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
    <span class="text-sm font-normal px-4">{{ title }}</span>
    <span>
      <button type="button" class="it-paginator__button" @click="emit('paginator-plus')">
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
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span class="sr-only">Next Pagination</span>
      </button>
    </span>
  </div>
</template>
<style lang="scss">
.it-paginator {
  @apply p-1 grid  items-center justify-center grid-cols-[30px_auto_30px];

  &__button {
    @apply border border-gray-500 text-white focus:ring-4 focus:outline-none font-medium text-sm p-2 text-center inline-flex items-center bg-gray-900 hover:bg-gray-700 focus:ring-teal-800;
  }
}
</style>
