<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const setActiveIf = (path: string) => {
  return route.fullPath === path ? 'it-btn--active' : ''
}
</script>
<template>
  <nav class="it-nav">
    <div class="it-nav__claim">
      <img
        src="@renderer/assets/pivotal-tracker.svg"
        class="h-8 inline-block"
        alt="Issue Tracker"
      />
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"
        >Issue Tracker</span
      >
    </div>
    <div class="it-nav__list" role="group">
      <button
        type="button"
        :class="setActiveIf('/about')"
        class="it-btn border rounded-s-lg"
        @click="router.push('/about')"
      >
        About
      </button>
      <button
        type="button"
        :class="setActiveIf('/issues')"
        class="it-btn border rounded-e-lg"
        @click="router.push('/issues')"
      >
        List Issues
      </button>
    </div>
    <div class="it-nav__paths">
      <strong class="pr-2">Repository:</strong>
      <a class="pr-4" href="https://github.com/vuejs/core" target="_blank" rel="noopener noreferrer"
        >Vue/core</a
      >
      <strong class="px-2 border-l border-l-neutral-500">Current route path:</strong>
      <span class="text-yellow-100">{{ route.fullPath }}</span>
    </div>
  </nav>
</template>
<style lang="scss">
.it-btn {
  @apply px-4 py-1 text-sm font-light;
  @apply hover:bg-gray-500 hover:text-white;
  @apply focus:z-10 focus:ring-1 focus:ring-blue-500 focus:text-white focus:bg-teal-700;
  @apply bg-gray-700 border-gray-600 text-white;
  &--active {
    @apply bg-teal-600;
  }
}

.it-nav {
  @apply w-full z-20 top-0 start-0 grid grid-cols-[auto_max-content] items-center  border-b border-gray-400;
  @apply bg-gray-800;

  &__claim {
    @apply p-2 grid grid-cols-[40px_auto] items-center;
  }

  &__list {
    @apply mr-4 font-medium  inline-flex rounded-md shadow-sm;
  }
  &__paths {
    @apply p-1 col-span-2 font-light text-xs text-gray-400;
    @apply bg-gray-900 border-gray-700 border-t;
  }
}
</style>
