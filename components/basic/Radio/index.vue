<template>
  <div
    class="flex items-center gap-2 cursor-pointer hover:opacity-80"
    :class="[disabled && 'opacity-60 pointer-events-none']"
  >
    <slot name="icon" :checked="checked">
      <IconCheckCircle v-if="checked" class="w-4 h-4" />
      <IconCircle v-else class="w-4 h-4" />
    </slot>

    <slot v-if="label" name="label" :label="label" :checked="checked">
      <label class="typo-h4" :class="checked && 'font-bold'">
        {{ label }}
      </label>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
