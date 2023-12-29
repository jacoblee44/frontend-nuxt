<template>
  <Story title="Basic/IconButton">
    <Variant title="Primary Button">
      <BasicIconButton>
        <i class="new-h24-icon-add text-[14px] w-3.5 h-3.5"></i>
      </BasicIconButton>
    </Variant>

    <Variant title="Secondary Button">
      <BasicIconButton variant="secondary">
        <i class="new-h24-icon-add text-[14px] w-3.5 h-3.5"></i>
      </BasicIconButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicIconButton from './index.vue';
</script>
