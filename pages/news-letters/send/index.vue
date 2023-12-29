<template>
  <div class="flex">
    <AppSubSidebar title="Newsletter">
      <template #actions>
        <div class="flex items-center gap-5">
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
          v-for="new1 in news"
          :key="new1.id"
          class="py-5 border-t border-shade-eb cursor-pointer hover:bg-shade-fa"
          @click="selectnew1(new1)"
        >
          <AuctionNewslettersCard
            :new1="new1"
            show-active
            selectable
            :checked="isSelected(new1)"
            @toggle-select="toggleSelectnew1(new1)"
          />
        </div>
      </div>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen w-0">
      <AppHeader class="flex-shrink-0">
        <BasicEditBox
          v-model="pageName"
          input-class="text-2xl max-w-130"
          placeholder="This is a cool title"
        />
        <div class="ml-2">
          <BasicBadge :label="Draft" :status="status" />
        </div>

        <template #actions>
          <AppHeaderLanguageSelect />
          <div class="bg-white flex items-center gap-5 pl-5 border-l border-shade-eb ml-5">
            <BasicButton variant="outline">Duplicate</BasicButton>
            <BasicButton variant="outline">Delete</BasicButton>
          </div>
        </template>
      </AppHeader>

      <NewsLetters />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewsList } from '~/composables/useNewsList';
import { NewsModel } from '~/resources/models';
import { BadgeStatus } from '~/components/basic/Badge/types';

const route = useRoute();

const { news } = useNewsList();

const pageName = ref('');
const selectednews: Ref<NewsModel[]> = ref([]);
const Draft = 'Draft';
const new1Id = computed(() => {
  return route.params.id;
});

const currentnew1 = computed(() => {
  return news.find((item) => item.id === new1Id.value);
});

const checkedAll = computed(() => {
  return selectednews.value.length === news.length;
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectednews.value = [];
  } else {
    selectednews.value = news;
  }
};
const status = computed(() => {
  return BadgeStatus.Danger;
});

const toggleSelectnew1 = (new1: NewsModel) => {
  if (selectednews.value.some((item) => item.id === new1.id)) {
    selectednews.value = selectednews.value.filter((item) => item.id !== new1.id);
  } else {
    selectednews.value = [...selectednews.value, new1];
  }
};

const isSelected = (new1: NewsModel) => {
  return selectednews.value.some((item) => item.id === new1.id);
};

const navigateToCreatePage = () => {
  navigateTo('/news-letters');
};

const selectnew1 = (new1: NewsModel) => {
  navigateTo(`/news-letters/${new1.id}`);
};

watch(currentnew1, () => {
  pageName.value = currentnew1.value?.title ?? '';
});
</script>
