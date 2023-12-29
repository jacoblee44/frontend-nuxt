<template>
  <div class="flex">
    <UserSidebar />

    <div class="flex flex-col w-full h-screen">
      <AppHeader class="border-b border-shade-eb">
        <h2 class="font-bold">Login History</h2>
      </AppHeader>

      <div class="flex items-center flex-wrap gap-4 px-7.5 mt-8">
        <UserLoginHistoryFilter v-model="filters" class="max-h-[80vh]" />

        <div class="h-9.5 border-l border-input-border mx-3.5" />

        <BasicInput v-model="search" placeholder="Search for user" input-box-class="!pr-0.5">
          <template #suffix>
            <BasicIconButton class="!w-8 !h-8">
              <i class="new-h24-icon-search text-[18px]"></i>
            </BasicIconButton>
          </template>
        </BasicInput>

        <DataTablePagination
          v-model:page="filters.page"
          v-model:page-size="filters.pageSize"
          class="ml-auto"
          :page-count="totalPageCount"
        />
      </div>

      <div class="flex-1 overflow-auto mt-5">
        <div class="px-5">
          <UserLoginHistoryTable :login-histories="loginHistories" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { loginHistories } = useLoginHistoryList({ pageSize: 100 });

const filters = ref({
  page: 0,
  pageSize: 30,
  search: '',
});

const search = computed({
  get: () => filters.value.search,
  set: (val) => {
    filters.value.search = val;
  },
});

const totalPageCount = computed(() => Math.ceil(loginHistories.length / filters.value.pageSize));
</script>
