<template>
  <Story title="Form/Input">
    <Variant title="FormInput">
      <FormInput name="title" placeholder="test" />
    </Variant>

    <Variant title="FormInput with label">
      <FormInput name="title" placeholder="test" label="Input" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import FormInput from './index.vue';
</script>
