<script setup lang="ts">
import { reactive } from 'vue'

const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <ul class="it-versions">
    <li class="it-versions__item">
      <img src="@renderer/assets/electron.svg" alt="Electron" class="w-4 h-4 me-1.5" />
      v{{ versions.electron }}
    </li>
    <li class="it-versions__item">
      <img src="@renderer/assets/chrome.svg" alt="Chrome" class="w-4 h-4 me-1.5" />
      v{{ versions.chrome }}
    </li>
    <li class="it-versions__item">
      <img src="@renderer/assets/node-js.svg" alt="node" class="text-white w-4 h-4 me-1.5" />
      v{{ versions.node }}
    </li>
  </ul>
</template>
<style lang="scss">
.it-versions {
  @apply inline-flex justify-end w-full;
  &__item {
    @apply text-xs font-light inline-flex items-center pl-1 pr-3 m-0 text-gray-400 leading-4;
  }
}
</style>
