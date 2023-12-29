<template>
  <BasicTable :columns="columns" :data="data">
    <template v-for="name in Object.keys($slots)" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData"></slot>
    </template>
  </BasicTable>
</template>

<script setup lang="ts">
import type { ITablePaginationModel } from './types';
import type { ITableColumnDef } from '~/components/basic/Table/types';

defineProps({
  columns: {
    type: Array as PropType<ITableColumnDef[]>,
    required: true,
  },
  data: {
    type: Array as PropType<unknown[]>,
    required: true,
  },
  pagination: {
    type: Object as PropType<ITablePaginationModel>,
    default: undefined,
  },
});
</script>
