<template>
  <div
    class="inline-flex items-center justify-center rounded-sm px-2"
    :class="{
      'bg-success': status === BadgeStatus.Success,
      'bg-danger': status === BadgeStatus.Danger,
      'bg-info text-white': status === BadgeStatus.Info,
      'h-4.5': size === 'sm',
      'h-5': size === 'md',
    }"
  >
    <span class="typo-xs font-bold">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { BadgeStatus } from './types';

defineProps({
  label: {
    type: String,
    required: true,
  },
  status: {
    type: String as PropType<BadgeStatus>,
    default: BadgeStatus.Success,
  },
  size: {
    type: String as PropType<'sm' | 'md'>,
    default: 'md',
  },
});
</script>
