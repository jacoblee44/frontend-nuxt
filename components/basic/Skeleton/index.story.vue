<template>
  <Story title="Basic/Skeleton">
    <Variant title="Line Skeleton">
      <BasicSkeleton class="w-full h-5 rounded-3" />
    </Variant>

    <Variant title="Circle Skeleton">
      <BasicSkeleton class="w-10 h-10 rounded-full" />
    </Variant>

    <Variant title="Box Skeleton">
      <BasicSkeleton class="w-10 h-10" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicSkeleton from './index.vue';
</script>
