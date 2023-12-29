<template>
  <div>
    <h3 class="font-bold mb-4">Recent Bids</h3>
    <div class="bg-white shadow-organization-logo">
      <div class="px-7.5 pt-7.5 pb-4.5">
        <AuctionOnliveDetailRecentBidsItem
          v-for="(item, index) in bidHistories"
          :key="item.id"
          :bid-history="item"
          :is-first="index === 0"
          :is-last="index === bidHistories.length - 1"
        />
      </div>

      <div class="py-5 flex items-center justify-center gap-2 border-t border-shade-e9">
        <i class="new-h24-icon-phone text-[15px]" />
        <span class="text-sm">Bid by phone</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { bidHistories } = useRecentBidList();
</script>
