<template>
  <div class="min-w-64.5">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2.5">
        <span class="font-bold">{{ notice.title }}</span>
      </div>

      <BasicCheckbox v-if="selectable" :checked="checked" @change="toggleSelect" />
    </div>

    <div class="flex items-start gap-2.5">
      <div class="flex-grow">
        <div class="flex items-center justify-between text-sm mb-2">
          <span class="text-sm">{{ notice.detail }}</span>
        </div>

        <div class="flex items-center justify-end">
          <div class="flex items-center gap-2.5">
            <BasicBadge :label="notice.status" :status="status" />
            <BasicBadge v-if="showActive" :label="activeLabel" :status="activeStatus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NoticeModel } from '~/resources/models';
import { NoticeStatus } from '~/resources/enums';
import { useCurrencyUtils } from '~/composables/useCurrencyUtils';
import { BadgeStatus } from '~/components/basic/Badge/types';

const props = defineProps({
  notice: {
    type: Object as PropType<LotModel>,
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
  if (props.notice.status === NoticeStatus.Alert) return BadgeStatus.Success;
  if (props.notice.status === NoticeStatus.Warning) return BadgeStatus.Danger;

  return BadgeStatus.Info;
});

const activeLabel = computed(() => {
  if (props.notice?.active) return 'Active';
  return 'Inactive';
});

const activeStatus = computed(() => {
  if (props.notice?.active) return BadgeStatus.Success;
  return BadgeStatus.Danger;
});

const toggleSelect = () => {
  emit('toggleSelect');
};
</script>
