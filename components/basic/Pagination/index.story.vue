<template>
  <Story title="Basic/Pagination">
    <Variant title="Pagination">
      <BasicPagination
        v-model="page"
        :page-count="pageCount"
        @update:model-value="logEvent('Value changed', { value: $event })"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const page = ref(0);
const pageCount = 10;
</script>
