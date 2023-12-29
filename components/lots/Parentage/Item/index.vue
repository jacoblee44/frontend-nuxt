<template>
  <div
    class="flex flex-col items-center justify-center bg-white mb-2 pt-2 pb-1 relative"
    :style="{
      gridRow: `${item.rowIndex + 1} / ${item.rowIndex + item.rowSpan + 2}`,
      gridColumn: `${level + 1}`,
    }"
  >
    <span class="font-bold text-sm">{{ item.name }}</span>
    <span v-if="item.description" class="text-sm text-center">{{ item.description }}</span>

    <div class="w-full right-0 top-0 absolute">
      <LotsParentInfoPopup />
    </div>

    <div v-if="level > 0" class="flex justify-center items-center absolute -left-7.5 top-1/2">
      <div class="w-7 h-[1px] bg-dark"></div>
      <div class="bg-dark w-1.5 h-1.5 border-white border-[1px] rounded-full"></div>
    </div>
  </div>

  <template v-if="item.items">
    <LotsParentageItem
      v-for="(childItem, index) in item.items"
      :key="index"
      :item="childItem"
      :level="level + 1"
    />
  </template>
</template>

<script setup lang="ts">
import type { IParentageItem } from '~/components/lots/Parentage/types';

defineProps({
  item: {
    type: Object as PropType<IParentageItem>,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});
</script>
