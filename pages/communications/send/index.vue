<template>
  <div class="flex">
    <AppSubSidebar title="Notifications">
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
          v-for="notice in notices"
          :key="notice.id"
          class="py-5 border-t border-shade-eb cursor-pointer hover:bg-shade-fa"
          @click="selectnotice(notice)"
        >
          <AuctionNoticeCard
            :notice="notice"
            show-active
            selectable
            :checked="isSelected(notice)"
            @toggle-select="toggleSelectnotice(notice)"
          />
        </div>
      </div>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen w-0">
      <AppHeader class="flex-shrink-0">
        <BasicEditBox
          v-model="pageName"
          input-class="text-2xl max-w-130"
          placeholder="This is a notification title"
        />

        <template #actions>
          <AppHeaderLanguageSelect />
          <div class="bg-white flex items-center gap-5 pl-5 border-l border-shade-eb ml-5">
            <BasicButton variant="outline">Mark as Draft</BasicButton>
          </div>
          <span class="cursor-pointer hover:opacity-80 ml-5">
            <i class="new-h24-icon-more-options text-[14px] w-3.5 h-3.5"></i>
          </span>
        </template>
      </AppHeader>

      <Notification v-model="filters" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NoticeModel } from '~/resources/models';

const route = useRoute();

const { notices } = useNoticeList();

const pageName = ref('');
const selectednotices: Ref<NoticeModel[]> = ref([]);
const filters = ref({
  page: 0,
  pageSize: 30,
  search: '',
});
const noticeId = computed(() => {
  return route.params.id;
});

const currentnotice = computed(() => {
  return notices.find((item) => item.id === noticeId.value);
});

const checkedAll = computed(() => {
  return selectednotices.value.length === notices.length;
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectednotices.value = [];
  } else {
    selectednotices.value = notices;
  }
};

const toggleSelectnotice = (notice: NoticeModel) => {
  if (selectednotices.value.some((item) => item.id === notice.id)) {
    selectednotices.value = selectednotices.value.filter((item) => item.id !== notice.id);
  } else {
    selectednotices.value = [...selectednotices.value, notice];
  }
};

const isSelected = (notice: NoticeModel) => {
  return selectednotices.value.some((item) => item.id === notice.id);
};

const navigateToCreatePage = () => {
  navigateTo('/notices');
};

const selectnotice = (notice: NoticeModel) => {
  navigateTo(`/notices/${notice.id}`);
};

watch(currentnotice, () => {
  pageName.value = currentnotice.value?.title ?? '';
});
</script>
