<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const versions = reactive({ ...window.electron.process.versions })
</script>
<template>
  <div class="about p-8">
    <h2>About</h2>
    <p>Simple Electron application to view Github issues</p>
    <p>Please see the readme.md for more information</p>
  </div>
</template>
