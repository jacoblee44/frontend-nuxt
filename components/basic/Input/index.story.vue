<template>
  <Story title="Basic/Input">
    <Variant title="BasicInput">
      <BasicInput v-model="productName" placeholder="test" />
    </Variant>

    <Variant title="BasicInput with label">
      <BasicInput v-model="productName" placeholder="test" label="Input" />
    </Variant>

    <Variant title="BasicInput with error">
      <BasicInput
        v-model="productName"
        placeholder="test"
        label="Input"
        error="This field is required"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicInput from './index.vue';

const productName = ref('');
</script>
