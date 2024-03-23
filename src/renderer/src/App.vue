<script setup lang="ts">
import Versions from './components/Versions.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <strong>Current route path:</strong> {{ route.fullPath }}
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/issues">Go to Issues table</RouterLink>
  </nav>
  <hr />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition>
        <Suspense :key="route.fullPath">
          <!-- main content -->
          <component :is="Component"></component>
          <!-- loading state -->
          <template #fallback> <h1>Loading...</h1></template>
        </Suspense>
      </Transition>
    </RouterView>
  </main>
  <hr />
  <Versions />
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
