<template>
  <div
    class="flex items-center bg-white shadow-sub-panel p-0.5 w-13 cursor-pointer"
    :class="{ 'justify-end': value }"
    @click="toggleValue"
  >
    <div
      v-if="value"
      class="w-6 h-4 flex items-center justify-center bg-dark text-white rounded-[1px]"
    >
      <i class="new-h24-icon-checkbox text-[8px] w-2 h-2"></i>
    </div>
    <div v-else class="w-6 h-4 rounded-[1px] bg-shade-93 shadow-switch-inactive"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: null,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});

const toggleValue = () => {
  value.value = !value.value;
};
</script>
