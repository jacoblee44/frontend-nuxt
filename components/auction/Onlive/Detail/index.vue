<template>
  <div>
    <div class="bg-dark text-white h-16.5 px-5 flex items-center justify-between mb-7.5">
      <div class="flex items-center gap-2.5">
        <div
          class="w-11.5 h-11.5 rounded-sm shrink-0 bg-cover bg-center"
          :style="{ backgroundImage: 'url(/images/lots/lot-1.png)' }"
        />

        <span class="font-bold">Active Lot: #3 Olivia</span>
      </div>

      <div class="flex items-center gap-5">
        <BasicButton class="bg-green-alert">Start Lot</BasicButton>
        <BasicButton class="!bg-info">Next Lot</BasicButton>
        <BasicButton class="bg-yellow-alert">Send Alert</BasicButton>
        <BasicButton class="bg-red-alert">End Lot</BasicButton>
      </div>
    </div>

    <div class="flex gap-7.5 mb-7.5">
      <div class="flex-grow">
        <AuctionOnliveDetailRecentBids />
      </div>

      <div class="w-107.5 flex-shrink-0">
        <div class="mb-7.5">
          <p class="text-xl font-bold mb-4">Manual Bid</p>
          <div class="grid grid-cols-2 gap-7.5">
            <BasicButton class="w-full">Make next minimum bid</BasicButton>
            <BasicButton class="w-full">Make telephone bid</BasicButton>
          </div>
        </div>

        <div class="mb-7.5">
          <p class="text-xl font-bold mb-4">Custom Bid</p>
          <BasicInput placeholder="Enter your custom bid" class="w-full mb-5" />
          <div class="flex gap-7.5">
            <BasicButton v-for="(item, index) in customBidAmounts" :key="index" class="w-full">
              {{ formatCurrency(item) }}
            </BasicButton>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-7.5">
      <BasicStatisticCard class="flex-1" label="Starting Bid" :value="formatCurrency(2500)" />
      <BasicStatisticCard class="flex-1" label="Next Minimum Bid" :value="formatCurrency(2500)" />
      <BasicStatisticCard class="flex-1" label="Last Bid From" :value="formatCurrency(2500)">
        <div class="pt-4.5 pb-3 px-5 flex items-center justify-center gap-2">
          <span class="fi fi-de rounded-sm w-13 h-9" />
          <p class="font-bold text-center text-[60px] leading-[85px]">DEU</p>
        </div>
      </BasicStatisticCard>
      <BasicStatisticCard class="flex-1" label="Tota bids" :value="750" />
      <BasicStatisticCard class="flex-1" label="Total bidders" :value="250" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { formatCurrency } = useCurrencyUtils();

const customBidAmounts = [2500, 2510, 2520, 2530];
</script>
