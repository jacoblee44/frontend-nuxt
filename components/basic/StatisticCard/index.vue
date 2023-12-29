<template>
  <div class="bg-white shadow-organization-logo">
    <div class="border-b border-shade-e9e9 pt-2.5 pb-2">
      <p class="text-center font-bold">{{ label }}</p>
    </div>
    <slot>
      <div class="pt-4.5 pb-3 px-2">
        <p class="font-bold text-center text-[60px] leading-[85px]">{{ value }}</p>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>
