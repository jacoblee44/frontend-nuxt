<template>
  <div class="min-w-64.5">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2.5">
        <span class="font-bold">{{ new1.title }}</span>
      </div>

      <BasicCheckbox v-if="selectable" :checked="checked" @change="toggleSelect" />
    </div>

    <div class="flex items-start gap-2.5">
      <div class="flex-grow">
        <div class="flex items-center justify-between">
          <span class="text-sm ">{{ new1.date }}</span>
          <div class="flex items-center gap-2.5">
            <BasicBadge :label="new1.status" :status="status" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NewsModel } from '~/resources/models';
import { NewsStatus } from '~/resources/enums';
import { useCurrencyUtils } from '~/composables/useCurrencyUtils';
import { BadgeStatus } from '~/components/basic/Badge/types';

const props = defineProps({
  new1: {
    type: Object as PropType<NewsModel>,
    required: true,
  },
  selectable: {
    type: Boolean,
    default: false,
  },
  showActive: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['toggleSelect']);

const { formatCurrency } = useCurrencyUtils();

const status = computed(() => {
  if (props.new1.status === NewsStatus.Published) return BadgeStatus.Success;
  if (props.new1.status === NewsStatus.Draft) return BadgeStatus.Danger;

  return BadgeStatus.Info;
});

const toggleSelect = () => {
  emit('toggleSelect');
};
</script>
