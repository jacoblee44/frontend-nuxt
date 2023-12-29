<template>
  <div class="pb-5 mb-5 border-b border-shade-eb">
    <div class="flex items-center gap-2 mb-2">
      <BasicBlockquote>{{ buyer.lot.type }}</BasicBlockquote>
      <span class="font-bold">{{ buyer.lot.title }}</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-end gap-2.5">
        <div
          class="w-12.5 h-12.5 shrink-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${buyer.lot.image})` }"
        />

        <div>
          <p class="text-sm">{{ buyer.auction.title }}</p>
          <p class="text-sm font-bold mb-1">{{ buyer.name }}</p>
        </div>
      </div>

      <div class="flex flex-col items-end">
        <p class="text-sm font-bold mb-1 text-right">{{ formatCurrency(buyer.amount) }}</p>
        <BasicBadge :label="buyer.status" :status="status" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { AuctionBuyerModel } from '~/resources/models';
import { useCurrencyUtils } from '~/composables/useCurrencyUtils';
import { PaymentStatus } from '~/resources/enums';
import { BadgeStatus } from '~/components/basic/Badge/types';

const props = defineProps({
  buyer: {
    type: Object as PropType<AuctionBuyerModel>,
    required: true,
  },
});

const { formatCurrency } = useCurrencyUtils();

const status = computed(() => {
  if (props.buyer?.status === PaymentStatus.Paid) return BadgeStatus.Success;
  return BadgeStatus.Danger;
});
</script>
