<template>
  <Story title="Form/Select">
    <Variant title="Default FormSelect">
      <FormSelect name="option" placeholder="Select" :options="options1" />
    </Variant>

    <Variant title="FormSelect with light color">
      <FormSelect name="option" placeholder="Select" :options="options1" color="light" />
    </Variant>

    <Variant title="FormSelect with label">
      <FormSelect name="option" placeholder="Select" :options="options1" label="Select Label" />
    </Variant>

    <Variant title="FormSelect with flag images">
      <FormSelect name="language" placeholder="Select" :options="languageOptions" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import FormSelect from './index.vue';
import { languageOptions } from '~/constants';

const options1 = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
];
</script>
