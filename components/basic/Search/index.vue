<template>
  <div
    class="bg-white rounded-sm border border-input-border p-0.5 flex items-center justify-between gap-5"
  >
    <input
      v-model="value"
      class="outline-none border-none pl-4.5 text-sm leading-[20px]"
      :placeholder="placeholder"
    />

    <span
      class="w-8 h-8.5 bg-primary text-white rounded-sm flex items-center justify-center cursor-pointer hover:opacity-80 shrink-0"
    >
      <i class="new-h24-icon-search text-[18px] w-4.5 h-4.5"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search...',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
