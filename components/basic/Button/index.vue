<template>
  <button
    class="px-4 py-1.5 rounded-sm font-bold text-xs border leading-[17px] cursor-pointer hover:opacity-80"
    :class="{
      'bg-primary text-white border-primary': variant === 'filled',
      'bg-white text-dark border-dark': variant === 'outline',
    }"
    :type="type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'filled',
  },
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button',
  },
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
