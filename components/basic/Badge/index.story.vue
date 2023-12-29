<template>
  <Story title="Basic/Badge">
    <Variant title="Success status">
      <BasicBadge label="Badge" status="success" />
    </Variant>

    <Variant title="Danger status">
      <BasicBadge label="Badge" status="danger" />
    </Variant>

    <Variant title="Info status">
      <BasicBadge label="Badge" status="info" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicBadge from './index.vue';
</script>
