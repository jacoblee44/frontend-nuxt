<template>
  <div
    class="w-9.5 h-9.5 shrink-0 inline-flex items-center justify-center cursor-pointer hover:opacity-80"
    :class="{
      'bg-primary text-white rounded-sm': variant === 'primary',
      'bg-white text-accent rounded-[1px] shadow-icon-btn': variant === 'secondary',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  containerClass: {
    type: String,
    default: '',
  },
});
</script>
