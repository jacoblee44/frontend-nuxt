<template>
  <Story title="Basic/CountrySelect">
    <Variant title="CountrySelect">
      <BasicCountrySelect
        v-model="country"
        @update:model-value="logEvent('Value Change', { value: $event })"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import BasicCountrySelect from './index.vue';

const country = ref('');
</script>
