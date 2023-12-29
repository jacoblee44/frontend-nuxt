<template>
  <Story title="Basic/SwitchButton">
    <Variant title="BasicSwitchButton">
      <BasicSwitchButton v-model="value" :options="options" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicSwitchButton from './index.vue';
import type { ISwitchButtonOption } from './types';

const value = ref('option 1');
const options: ISwitchButtonOption[] = [
  {
    label: 'Option 1',
    value: 'option 1',
  },
  {
    label: 'Option 2',
    value: 'option 2',
  },
];
</script>
