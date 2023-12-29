<template>
  <Story title="Form/Textarea">
    <Variant title="Default FormTextarea">
      <FormTextarea name="description" placeholder="test" />
    </Variant>

    <Variant title="FormTextarea with light background">
      <FormTextarea name="description" placeholder="test" color="light" />
    </Variant>

    <Variant title="FormTextarea with label and rows">
      <FormTextarea name="description" placeholder="test" label="Description" :rows="5" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import FormTextarea from './index.vue';
</script>
