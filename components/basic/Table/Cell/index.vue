<template>
  <td
    class="bg-white px-5 py-1 [&:first-child]:rounded-l-sm [&:last-child]:rounded-r-sm"
    :class="[getAlignClass(col.align), col.tdClass]"
  >
    <slot
      v-if="$slots[`td-${col.id}`]"
      :name="'td-' + col.id"
      :value="value"
      :col="col"
      :row="row"
      :col-id="colId"
      :row-id="rowId"
    />
    <slot
      v-if="$slots.td"
      name="td"
      :value="value"
      :col="col"
      :row="row"
      :col-id="colId"
      :row-id="rowId"
    />
    <template v-else>
      {{ value }}
    </template>
  </td>
</template>

<script setup lang="ts">
import { get } from 'lodash';
import type { ITableColumnDef } from '../types';
import { getAlignClass } from '../utils';

const props = defineProps({
  col: {
    type: Object as PropType<ITableColumnDef>,
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
  colId: {
    type: Number,
    required: true,
  },
});

const value = computed(() => {
  if (props.col?.valueGetter) {
    return props.col.valueGetter(props.row, props.rowId);
  }
  return get(props.row, props.col.id);
});
</script>
