<template>
  <div class="min-w-64.5">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2.5">
        <BasicBlockquote>{{ lot.type }}</BasicBlockquote>
        <span class="font-bold">{{ lot.title }}</span>
      </div>

      <BasicCheckbox v-if="selectable" :checked="checked" @change="toggleSelect" />
    </div>

    <div class="flex items-start gap-2.5">
      <div
        class="bg-cover bg-no-repeat bg-center rounded-sm w-16 h-16 flex-shrink-0"
        :style="{ backgroundImage: `url(${lot.image})` }"
      ></div>

      <div class="flex-grow">
        <div class="flex items-center justify-between text-sm mb-2">
          <div>
            <p>{{ lot.bids }} bids</p>
            <p>{{ lot.bidders }} bidders</p>
          </div>

          <div class="font-bold text-right">
            <p>Starting bid</p>
            <p>{{ formatCurrency(lot.startingBid) }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-sm font-bold">{{ lot.serial }}</span>

          <div class="flex items-center gap-2.5">
            <BasicBadge :label="lot.status" :status="status" />
            <BasicBadge v-if="showActive" :label="activeLabel" :status="activeStatus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LotModel } from '~/resources/models';
import { LotStatus } from '~/resources/enums';
import { useCurrencyUtils } from '~/composables/useCurrencyUtils';
import { BadgeStatus } from '~/components/basic/Badge/types';

const props = defineProps({
  lot: {
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
  if (props.lot.status === LotStatus.BidUp) return BadgeStatus.Success;
  if (props.lot.status === LotStatus.Withdraw) return BadgeStatus.Danger;

  return BadgeStatus.Info;
});

const activeLabel = computed(() => {
  if (props.lot?.active) return 'Active';
  return 'Inactive';
});

const activeStatus = computed(() => {
  if (props.lot?.active) return BadgeStatus.Success;
  return BadgeStatus.Danger;
});

const toggleSelect = () => {
  emit('toggleSelect');
};
</script>
