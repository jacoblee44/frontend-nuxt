<template>
  <Story title="Basic/Button">
    <Variant title="Filled Button">
      <BasicButton variant="filled"> Click me </BasicButton>
    </Variant>

    <Variant title="Outlined Button">
      <BasicButton variant="outlined"> Click me </BasicButton>
    </Variant>

    <Variant title="Button Event">
      <BasicButton @click="logEvent('Click', 'Basic Button is clicked!')"> Click me </BasicButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import BasicButton from './index.vue';
</script>
