<template>
  <div class="flex flex-col w-full h-screen bg-white">
    <AppHeader>
      <h2 class="font-bold">Users</h2>
      <template #actions>
        <BasicButton class="!px-3 mr-5" variant="outline" @click="navigateToListView">
          List View
        </BasicButton>
        <BasicButton class="!px-3 mr-5" variant="outline" @click="navigateToLoginHistoryView">
          Login History
        </BasicButton>
        <BasicIconButton class="!w-10 !h-7.5" @click="navigateToListView">
          <i class="new-h24-icon-add text-white text-[14px] w-3.5 h-3.5"></i>
        </BasicIconButton>
      </template>
      <template #tabs>
        <div class="flex items-center flex-wrap gap-4">
          <AppTableToolbar class="!p-0" expanded search-placeholder="Search for user">
            <template #filter>
              <UserFilter v-model="filters" class="max-h-[80vh]" />
            </template>
          </AppTableToolbar>
          <DataTablePagination
            v-model:page="filters.page"
            v-model:page-size="filters.pageSize"
            class="ml-auto"
            :page-count="totalPageCount"
          />
        </div>
      </template>
    </AppHeader>

    <div class="flex-1 overflow-auto mt-5">
      <div class="p-5">
        <UserTable :users="users" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const filters = ref({
  page: 0,
  pageSize: 30,
  search: '',
});

const { users } = useUserList();

const totalPageCount = computed(() => Math.ceil(users.length / filters.value.pageSize));

const navigateToListView = () => {
  navigateTo('/users/list');
};

const navigateToLoginHistoryView = () => {
  navigateTo('/users/login-history');
};
</script>
