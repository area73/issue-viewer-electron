<script setup lang="ts">
import Footer from '@renderer/components/Footer.vue'
import Skeleton from '@renderer/components/Skeleton.vue'
import NavBar from '@renderer/components/NavBar.vue'

import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <NavBar class="app__header" />
  <main class="app__body">
    <RouterView v-slot="{ Component }">
      <Transition>
        <Suspense :key="route.fullPath">
          <!-- main content -->
          <component :is="Component"></component>
          <!-- loading state -->
          <template #fallback> <Skeleton /></template>
        </Suspense>
      </Transition>
    </RouterView>
  </main>
  <Footer class="app__footer" />
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.app {
  @apply grid grid-rows-[auto_1fr_auto] h-screen;

  &__header {
  }

  &__body {
    @apply overflow-auto p-4 bg-gray-800 text-gray-300 font-[200];
  }

  &__footer {
    @apply pt-1 px-1 bg-gray-900;
  }
}
</style>
