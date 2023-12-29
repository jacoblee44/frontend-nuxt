<template>
  <div class="flex">
    <AppSubSidebar title="Lots">
      <template #actions>
        <div class="flex items-center gap-5">
          <BasicButton variant="outline">Upload Files</BasicButton>

          <BasicIconButton class="!w-10 !h-7.5" @click="navigateToCreatePage">
            <i class="new-h24-icon-add text-white text-[14px] w-3.5 h-3.5"></i>
          </BasicIconButton>
        </div>
      </template>

      <template #subTitle>
        <AppTableToolbar :checked-all="checkedAll" @check-all="toggleCheckedAll" />
      </template>

      <div>
        <div
          v-for="lot in lots"
          :key="lot.id"
          class="py-5 border-t border-shade-eb cursor-pointer hover:bg-shade-fa"
          @click="selectLot(lot)"
        >
          <AuctionBidBoardLotsCard
            :lot="lot"
            show-active
            selectable
            :checked="isSelected(lot)"
            @toggle-select="toggleSelectLot(lot)"
          />
        </div>
      </div>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen w-0">
      <AppHeader class="flex-shrink-0">
        <BasicEditBox
          v-model="pageName"
          input-class="text-2xl max-w-130"
          placeholder="Cornet's Creation"
        />

        <template #actions>
          <AppHeaderLanguageSelect />
          <div class="bg-white flex items-center gap-5 pl-5 border-l border-shade-eb ml-5">
            <span class="text-sm font-bold">Starting Bid</span>
            <BasicEditBox v-model="startingBid" :has-border="false" />
            <BasicButton variant="outline">Withdraw</BasicButton>
            <BasicButton variant="outline">Hide</BasicButton>
          </div>
        </template>
      </AppHeader>

      <LotsCreate />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LotModel } from '~/resources/models';

const route = useRoute();

const { lots } = useLotList();
const { formatCurrency } = useCurrencyUtils();

const pageName = ref('');
const selectedLots: Ref<LotModel[]> = ref([]);
const startingBid = ref(formatCurrency(4000));

const lotId = computed(() => {
  return route.params.id;
});

const currentLot = computed(() => {
  return lots.find((item) => item.id === lotId.value);
});

const checkedAll = computed(() => {
  return selectedLots.value.length === lots.length;
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectedLots.value = [];
  } else {
    selectedLots.value = lots;
  }
};

const toggleSelectLot = (lot: LotModel) => {
  if (selectedLots.value.some((item) => item.id === lot.id)) {
    selectedLots.value = selectedLots.value.filter((item) => item.id !== lot.id);
  } else {
    selectedLots.value = [...selectedLots.value, lot];
  }
};

const isSelected = (lot: LotModel) => {
  return selectedLots.value.some((item) => item.id === lot.id);
};

const navigateToCreatePage = () => {
  navigateTo('/lots');
};

const selectLot = (lot: LotModel) => {
  navigateTo(`/lots/${lot.id}`);
};

watch(currentLot, () => {
  pageName.value = currentLot.value?.title ?? '';
});
</script>
