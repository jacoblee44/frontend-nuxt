<template>
  <div class="flex-1 flex flex-col h-screen">
    <AppHeader class="flex-shrink-0">
      <div class="flex items-center gap-5">
        <i
          class="new-h24-icon-arrow text-[12px] cursor-pointer hover:opacity-80"
          @click="$router.back()"
        />
        <h2 class="font-bold">29th Westphalian Online Auction - Foals</h2>
      </div>

      <template #actions>
        <div class="">
          <BasicButton variant="outline" @click="onEdit">Edit Auction</BasicButton>
        </div>
      </template>
    </AppHeader>

    <AuctionOnlive />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const auctionId = computed(() => {
  return route.params.id;
});

const onEdit = () => {
  const path = auctionId.value ? `/auctions/${auctionId.value}` : '/auctions';
  navigateTo(path);
};
</script>
