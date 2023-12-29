<template>
  <thead>
    <tr>
      <th
        v-for="(col, colId) in columns"
        :key="col.id"
        class="bg-dark typo-h5 text-white font-bold px-5 py-1 [&:first-child]:rounded-l-sm [&:last-child]:rounded-r-sm"
        :class="[getAlignClass(col.align)]"
      >
        <slot v-if="$slots.th" name="th" :col="col" :col-id="colId" />
        <template v-else>
          {{ col.title }}
        </template>
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import type { ITableColumnDef } from '../types';
import { getAlignClass } from '../utils';

defineProps({
  columns: {
    type: Array as PropType<ITableColumnDef[]>,
    required: true,
  },
});
</script>
