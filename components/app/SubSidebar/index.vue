<template>
  <div class="w-102.5 h-screen bg-white shadow-sub-panel pt-7 relative flex flex-col shrink-0">
    <div class="flex items-center shrink-0 px-5 mb-7.5">
      <h2 class="font-bold mr-auto">{{ props.title }}</h2>
      <slot name="actions" />
    </div>

    <div class="px-5">
      <slot name="subTitle" />
    </div>

    <div class="h-0 flex-grow overflow-auto px-5">
      <slot />
    </div>

    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'List',
  },
});
</script>
