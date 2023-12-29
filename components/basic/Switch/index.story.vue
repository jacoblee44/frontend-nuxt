<template>
  <Story title="Basic/Switch">
    <Variant title="BasicSwitch">
      <BasicSwitch v-model="value" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicSwitch from './index.vue';

const value = ref(true);
</script>
