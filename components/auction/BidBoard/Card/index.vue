<template>
  <div class="pb-5 mb-5 border-b border-shade-eb">
    <div class="flex items-center gap-2 mb-2">
      <BasicBlockquote>{{ bid.lot.type }}</BasicBlockquote>
      <span class="font-bold">{{ bid.lot.title }}</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-end gap-2.5">
        <div
          class="w-12.5 h-12.5 shrink-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${bid.lot.image})` }"
        />

        <div>
          <p class="text-sm font-bold mb-1">{{ bid.bidderName }}</p>
          <p>{{ formatDateTime(bid.createdAt) }}</p>
        </div>
      </div>

      <div class="flex items-end gap-5">
        <div>
          <p class="text-sm font-bold mb-1 text-right">{{ formatCurrency(bid.amount) }}</p>
          <BasicBadge :label="bidTypeLabel" :status="BadgeStatus.Info" />
        </div>

        <BasicButton variant="outline" class="max-w-21.5">Invalidate Bid</BasicButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { BidModel } from '~/resources/models';
import { useCurrencyUtils } from '~/composables/useCurrencyUtils';
import { BidType } from '~/resources/enums';
import { BadgeStatus } from '~/components/basic/Badge/types';

const props = defineProps({
  bid: {
    type: Object as PropType<BidModel>,
    required: true,
  },
});

const { formatCurrency } = useCurrencyUtils();
const { formatDateTime } = useDateUtils();

const bidTypeLabel = computed(() => {
  if (props.bid?.type === BidType.Direct) return 'Direct Bid';
  return `Max Bid Up to ${formatCurrency(props.bid.maxAmount ?? 0)}`;
});
</script>
