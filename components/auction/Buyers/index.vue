<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5 w-full">
      <AuctionBidBoardLots class="mb-7.5" />

      <div class="flex gap-15">
        <div class="flex-grow">
          <AuctionBuyersCard v-for="buyer in auctionBuyers" :key="buyer.id" :buyer="buyer" />
        </div>

        <div class="w-82 flex-shrink-0">
          <BasicStatisticCard label="Total Lots Sold" value="12" class="mb-4" />
          <BasicStatisticCard label="Average hammer price" :value="formatCurrency(2500)" />
        </div>
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { formatCurrency } = useCurrencyUtils();
const { auctionBuyers } = useAuctionBuyerList();
</script>
