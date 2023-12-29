<template>
  <Story title="Basic/Radio">
    <Variant title="Radio">
      <BasicRadio :checked="checked" @click="onCheck" />
    </Variant>

    <Variant title="Radio with label">
      <BasicRadio label="Radio" :checked="checked" @click="onCheck" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const checked = ref(false);

const onCheck = () => {
  checked.value = true;
  logEvent('onCheck', {});
};
</script>
