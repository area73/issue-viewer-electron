<script setup lang="ts">
import mila from 'markdown-it-link-attributes'
import ins from 'markdown-it-ins'
import mdCodeBlock from 'markdown-it-code-block'
import { VueMarkdownIt } from '@f3ve/vue-markdown-it'
import { figure } from '@mdit/plugin-figure'
import { markdownItTable } from 'markdown-it-table'
//@ts-expect-error: I didn't create the type declaration for current markdown
import { markdown } from '../../../../README.md'

const options = {
  html: true,
  linkify: true
}
</script>
<template>
  <div class="about p-8 m-8 pt-4 pb-12 px-10 bg-gray-900">
    <vue-markdown-it
      :source="markdown || ''"
      :options="options"
      preset="commonmark"
      :plugins="[
        markdownItTable,
        mdCodeBlock,
        figure,
        ins,
        [mila, { attrs: { target: '_blank', rel: 'noopener' } }]
      ]"
    />
  </div>
</template>

<style lang="scss">
.about {
  ul {
    @apply list-disc list-inside ml-4;
  }
  li {
    @apply pb-2;
  }
  table {
    @apply w-full;
  }
  tr {
    @apply border-b border-gray-500;
  }
  td {
    @apply pt-3;
  }
}
</style>
