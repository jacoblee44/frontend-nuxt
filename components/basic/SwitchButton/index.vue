<template>
  <div class="inline-flex items-center bg-white shadow-switch-btn p-0.5">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="w-34.5 h-6.5 flex-shrink-0 flex items-center justify-center gap-1 cursor-pointer"
      :class="{
        'bg-dark text-white font-bold': item.value === activeValue,
        'bg-white': item.value !== activeValue,
      }"
      @click="activeValue = item.value"
    >
      <i v-if="item.value === activeValue" class="new-h24-icon-checkbox text-[8px] w-2 h-2"></i>
      <span class="text-sm">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISwitchButtonOption } from './types';

const props = defineProps({
  options: {
    type: Array as PropType<ISwitchButtonOption[]>,
    required: true,
  },
  modelValue: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

const activeValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
