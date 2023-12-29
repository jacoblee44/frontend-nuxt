<template>
  <AppSubSidebar title="Users">
    <template #actions>
      <BasicButton class="!px-3 mr-5" variant="outline" @click="navigateToTableView">
        Table View
      </BasicButton>
      <BasicButton class="!px-3 mr-5" variant="outline" @click="navigateToLoginHistoryView">
        Login History
      </BasicButton>
      <BasicIconButton class="!w-10 !h-7.5" @click="navigateToCreateView">
        <i class="new-h24-icon-add text-white text-[14px] w-3.5 h-3.5"></i>
      </BasicIconButton>
    </template>

    <template #subTitle>
      <AppTableToolbar
        v-model:multiple="multiSelect"
        v-model:search="search"
        :checked-all="checkedAll"
        @check-all="checkedAll = $event"
      >
        <template #filter>
          <UserFilter v-model="filters" class="max-h-[80vh]" x-pos="right" />
        </template>
      </AppTableToolbar>
    </template>

    <UserList v-model:selected-ids="selectedIds" :users="users" :multi-select="multiSelect" />
  </AppSubSidebar>
</template>

<script setup lang="ts">
const { users } = useUserList();

const selectedIds = ref<string[]>([]);
const multiSelect = ref(true);
const filters = ref({
  page: 0,
  pageSize: 30,
  search: '',
});

const checkedAll = computed({
  get: () => users.every((user) => selectedIds.value.includes(user.id)),
  set: (checked) => {
    if (checked) {
      selectedIds.value = users.map((user) => user.id);
    } else {
      selectedIds.value = [];
    }
  },
});

const search = computed({
  get: () => filters.value.search,
  set: (val) => {
    filters.value.search = val;
  },
});

watch(multiSelect, (multiple) => {
  if (!multiple) {
    selectedIds.value = selectedIds.value.splice(0, 1);
  }
});

const navigateToTableView = () => {
  navigateTo('/users/table');
};

const navigateToLoginHistoryView = () => {
  navigateTo('/users/login-history');
};

const navigateToCreateView = () => {
  navigateTo('/users/list');
};
</script>
