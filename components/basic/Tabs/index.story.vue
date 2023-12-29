<template>
  <Story title="Basic/Tabs">
    <Variant title="BasicTabs">
      <BasicTabs :active-tab="activeTab" :tabs="siteTabs" @change-tab="changeTab" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicTabs from './index.vue';
import type { ITabItem } from './types';
const activeTab = ref('Tab 1');

const siteTabs: ITabItem[] = [
  { label: 'Tab 1', value: 'Tab 1' },
  { label: 'Tab 2', value: 'Tab 2' },
  { label: 'Tab 3', value: 'Tab 3' },
];

const changeTab = (value: string) => {
  activeTab.value = value;
};
</script>
