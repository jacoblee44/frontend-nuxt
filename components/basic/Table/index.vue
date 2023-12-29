<template>
  <table class="w-full typo-h5 border-separate border-spacing-x-0 border-spacing-y-2.5">
    <BasicTableHeader :columns="columns">
      <template v-for="name in Object.keys($slots)" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData"></slot>
      </template>
    </BasicTableHeader>

    <tbody>
      <BasicTableRow
        v-for="(row, rowId) in data"
        :key="rowId"
        :columns="columns"
        :row="row"
        :row-id="rowId"
      >
        <template v-for="name in Object.keys($slots)" :key="name" #[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </BasicTableRow>

      <tr v-if="!data.length">
        <td :colspan="columns.length">
          <slot name="no-data">
            <div class="typo-h5 text-center px-4 py-8">No Records</div>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { ITableColumnDef } from './types';

defineProps({
  columns: {
    type: Array as PropType<ITableColumnDef[]>,
    required: true,
  },
  data: {
    type: Array as PropType<unknown[]>,
    required: true,
  },
});
</script>
