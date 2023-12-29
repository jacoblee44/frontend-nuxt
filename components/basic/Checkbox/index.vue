<template>
  <div
    class="flex items-center gap-2.5 cursor-pointer hover:opacity-80"
    :class="[disabled && 'opacity-60 pointer-events-none']"
    @click="handleChange"
  >
    <div
      class="flex items-center justify-center bg-light border-2 border-dark rounded-sm w-[15px] h-[15px] flex-shrink-0"
    >
      <i v-if="checked" class="new-h24-icon-checkbox text-[8px] w-2 h-2"></i>
    </div>

    <span v-if="label" class="typo-h5">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  checked: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['change']);

const handleChange = (event: Event) => {
  event.stopPropagation();
  emit('change', !props.checked);
};
</script>
