<template>
  <div class="flex items-center gap-7.5">
    <div
      v-for="item in tabs"
      :key="item.value"
      class="pb-2 cursor-pointer relative"
      @click="handleClickTab(item)"
    >
      <span class="text-xl" :class="{ 'font-bold': item.value === activeTab }">
        {{ item.label }}
      </span>

      <div
        class="absolute left-0 h-0.5 bg-shade-26 transition-all ease-in duration-200 bottom-0 origin-center"
        :class="{
          'w-0': item.value !== activeTab,
          'w-full': item.value === activeTab,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITabItem } from './types';

defineProps({
  tabs: {
    type: Array as PropType<ITabItem[]>,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['changeTab']);

const handleClickTab = (tab: ITabItem) => {
  emit('changeTab', tab.value);
};
</script>
