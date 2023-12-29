<template>
  <Story title="Basic/RadioGroupRow">
    <Variant title="RadioGroupRow">
      <BasicRadioGroupRow
        v-model="value"
        :options="options"
        @update:model-value="logEvent('onChange', { value: $event })"
      />
    </Variant>

    <Variant title="RadioGroupRow with Label">
      <BasicRadioGroupRow
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
