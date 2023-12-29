<template>
  <tr>
    <BasicTableCell
      v-for="(col, colId) in columns"
      :key="col.id"
      :col="col"
      :row="row"
      :col-id="colId"
      :row-id="rowId"
    >
      <template v-for="name in Object.keys($slots)" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData"></slot>
      </template>
    </BasicTableCell>
  </tr>
</template>

<script setup lang="ts">
import type { ITableColumnDef } from '../types';

defineProps({
  columns: {
    type: Array as PropType<ITableColumnDef[]>,
    required: true,
  },
  row: {
    type: Object as PropType<unknown>,
    required: true,
  },
  rowId: {
    type: Number,
    required: true,
  },
});
</script>
