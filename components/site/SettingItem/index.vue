<template>
  <div class="py-5 border-t border-shade-eb">
    <div class="flex items-center justify-between mb-2">
      <span class="font-bold text-base">{{ item.label }}</span>
      <BasicCheckbox :checked="checked" @change="changeSelection" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-sm">{{ item.description }}</span>

      <BasicBadge :label="item.status" :status="status" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISiteSettingItem } from './types';

const props = defineProps({
  item: {
    type: Object as PropType<ISiteSettingItem>,
    required: true,
  },
  selectedSettings: {
    type: Array as PropType<ISiteSettingItem[]>,
    default: () => [],
  },
});

const emit = defineEmits(['toggleSelect']);

const status = computed(() => {
  if (props.item?.status === 'active') return 'success';
  return 'danger';
});

const checked = computed(() => {
  return props.selectedSettings?.some((item) => item.id === props.item.id);
});

const changeSelection = () => {
  emit('toggleSelect');
};
</script>
