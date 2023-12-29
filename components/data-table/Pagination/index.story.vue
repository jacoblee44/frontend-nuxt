<template>
  <Story title="DataTablePagination">
    <Variant title="Full pagination">
      <DataTablePagination
        v-model:page="page"
        v-model:page-size="pageSize"
        :page-count="totalPageCount"
        @update:page="logEvent('Page changed', { value: $event })"
        @update:page-size="logEvent('Page size changed', { value: $event })"
      />
    </Variant>
    <Variant title="Simple pagination">
      <DataTablePagination
        v-model:page="page"
        :page-count="totalPageCount"
        @update:page="logEvent('Page changed', { value: $event })"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const page = ref(0);
const pageSize = ref(20);
const totalCount = 500;
const totalPageCount = computed(() => Math.ceil(totalCount / pageSize.value));
</script>
