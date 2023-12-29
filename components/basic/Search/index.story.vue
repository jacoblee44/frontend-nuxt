<template>
  <Story title="Basic/Search">
    <Variant title="BasicSearch">
      <BasicSearch v-model="search" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicSearch from './index.vue';

const search = ref('');
</script>
