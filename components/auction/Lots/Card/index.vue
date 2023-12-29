<template>
  <div>
    <BasicBlockquote class="inline-flex">{{ lot.type }}</BasicBlockquote>
    <p class="text-xl font-bold mb-6.5">{{ lot.title }}</p>
    <div
      class="bg-cover bg-no-repeat bg-center w-full h-64 rounded-sm mb-3.5"
      :style="{ backgroundImage: `url(${lot.image})` }"
    ></div>

    <div class="pb-3 mb-4 border-b border-shade-97/50">
      <p class="font-bold text-sm">Filly by</p>
      <p class="text-sm">{{ lot.fillyBy }}</p>
    </div>

    <div class="pb-3 mb-4 border-b border-shade-97/50">
      <p class="font-bold text-sm">Starting Bid</p>
      <p class="font-bold text-2xl">{{ formatCurrency(lot.startingBid) }}</p>
    </div>

    <div class="mb-3">
      <p class="text-sm mb-1"><span class="font-bold">Auction Starts</span> (CET)</p>
      <div class="grid grid-cols-2">
        <div class="border-r border-shade-97/50">
          <span class="text-sm">{{ formatDate(lot.auctionStart) }}</span>
        </div>
        <div class="flex items-end justify-end">
          <span class="text-2xl font-bold mr-1">{{ format24HourTime(lot.auctionStart) }}</span>
          <span class="text-sm">{{ formatPeriod(lot.auctionStart) }}</span>
        </div>
      </div>
    </div>

    <BasicButton variant="outline" class="w-full !text-sm text-shade-26">Edit</BasicButton>
  </div>
</template>

<script setup lang="ts">
import { LotModel } from '~/resources/models';

defineProps({
  lot: {
    type: Object as PropType<LotModel>,
    required: true,
  },
});

const { formatCurrency } = useCurrencyUtils();
const { formatDate, format24HourTime, formatPeriod } = useDateUtils();
</script>
