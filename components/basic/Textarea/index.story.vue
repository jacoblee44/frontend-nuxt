<template>
  <Story title="Basic/Textarea">
    <Variant title="Default BasicTextarea">
      <BasicTextarea placeholder="test" />
    </Variant>

    <Variant title="BasicTextarea with light background">
      <BasicTextarea placeholder="test" color="light" />
    </Variant>

    <Variant title="BasicTextarea with label and rows">
      <BasicTextarea v-model="content" placeholder="test" label="Description" :rows="5" />
    </Variant>

    <Variant title="BasicTextarea with error">
      <BasicTextarea placeholder="test" error="This field is required." label="Description" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicTextarea from './index.vue';

const content = ref('');
</script>
