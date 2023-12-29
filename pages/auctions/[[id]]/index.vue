<template>
  <div class="flex">
    <AppSubSidebar title="Auctions">
      <template #actions>
        <BasicIconButton class="!w-10 !h-7.5" @click="navigateToCreatePage">
          <i class="new-h24-icon-add text-white text-[14px] w-3.5 h-3.5"></i>
        </BasicIconButton>
      </template>

      <template #subTitle>
        <AppTableToolbar :checked-all="checkedAll" @check-all="toggleCheckedAll" />
      </template>

      <div>
        <AuctionSidebarItem
          v-for="item in auctions"
          :key="item.id"
          :auction="item"
          :selected-auctions="selectedAuctions"
          @toggle-select="toggleSelectAuction(item)"
        />
      </div>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen w-0">
      <AppHeader class="flex-shrink-0">
        <BasicEditBox v-model="pageName" input-class="text-2xl max-w-130" placeholder="Auction" />

        <template #actions>
          <AppHeaderLanguageSelect />
          <div class="bg-white flex items-center gap-5 pl-5 border-l border-shade-eb ml-5">
            <BasicButton @click="startAuction">Start Auction</BasicButton>

            <span class="cursor-pointer hover:opacity-80">
              <i class="new-h24-icon-more-options text-[14px] w-3.5 h-3.5"></i>
            </span>
          </div>
        </template>

        <template #tabs>
          <BasicTabs :active-tab="activeTab" :tabs="tabs" @change-tab="changeTab" />
        </template>
      </AppHeader>

      <AuctionGeneral v-if="activeTab === AuctionsTab.General" />
      <AuctionLots v-if="activeTab === AuctionsTab.Lots" />
      <AuctionBidBoard v-if="activeTab === AuctionsTab.BidBoard" />
      <AuctionBuyers v-if="activeTab === AuctionsTab.Buyers" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuctionsTab } from './types';
import type { ITabItem } from '~/components/basic/Tabs/types';
import { useAuctionList } from '~/composables/useAuctionList';
import { AuctionModel } from '~/resources/models';

const route = useRoute();

const { auctions } = useAuctionList();

const pageName = ref('');
const selectedAuctions: Ref<AuctionModel[]> = ref([]);

const auctionId = computed(() => {
  return route.params.id;
});

const currentAuction = computed(() => {
  return auctions.find((item) => item.id === auctionId.value);
});

const activeTab = computed({
  get: () => {
    if (
      route.query?.tab === AuctionsTab.Lots ||
      route.query?.tab === AuctionsTab.BidBoard ||
      route.query?.tab === AuctionsTab.Buyers
    ) {
      return route.query?.tab;
    }
    return AuctionsTab.General;
  },
  set: (value) => {
    navigateTo({
      path: currentAuction.value ? `/auctions/${currentAuction.value.id}` : '/auctions',
      query: {
        tab: value,
      },
      replace: true,
    });
  },
});

const tabs: ITabItem[] = [
  { label: 'General', value: AuctionsTab.General },
  { label: 'Lots', value: AuctionsTab.Lots },
  { label: 'Bid board', value: AuctionsTab.BidBoard },
  { label: 'Buyers', value: AuctionsTab.Buyers },
];

const checkedAll = computed(() => {
  return selectedAuctions.value.length === auctions.length;
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectedAuctions.value = [];
  } else {
    selectedAuctions.value = auctions;
  }
};

const changeTab = (value: AuctionsTab) => {
  activeTab.value = value;
};

const toggleSelectAuction = (auction: AuctionModel) => {
  if (selectedAuctions.value.some((item) => item.id === auction.id)) {
    selectedAuctions.value = selectedAuctions.value.filter((item) => item.id !== auction.id);
  } else {
    selectedAuctions.value = [...selectedAuctions.value, auction];
  }
};

const navigateToCreatePage = () => {
  navigateTo('/auctions');
};

const startAuction = () => {
  const path = auctionId.value ? `/auctions/${auctionId.value}/onlive` : '/auctions/onlive';
  navigateTo(path);
};

watch(currentAuction, () => {
  pageName.value = currentAuction.value?.title ?? '';
});
</script>
