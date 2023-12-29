<template>
  <Story title="Basic/RadioGroup">
    <Variant title="RadioGroup">
      <BasicRadioGroup
        v-model="value"
        :options="options"
        @update:model-value="logEvent('onChange', { value: $event })"
      />
    </Variant>

    <Variant title="RadioGroup with Label">
      <BasicRadioGroup
        v-model="value"
        label="Status"
        :options="options"
        @update:model-value="logEvent('onChange', { value: $event })"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import type { IRadioOption } from './types';

const value = ref();

const options: IRadioOption[] = [
  { label: 'Active', value: true },
  { label: 'Inactive', value: false },
];
</script>
