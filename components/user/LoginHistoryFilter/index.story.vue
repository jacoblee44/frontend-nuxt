<template>
  <Story title="User/LoginHistoryFilter">
    <Variant title="LoginHistoryFilter">
      <div class="flex justify-center p-10">
        <UserLoginHistoryFilter
          v-model="filters"
          @update:model-value="logEvent('Filter applied', $event)"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import type { ILoginHistoryFilter } from './types';

const filters = ref<ILoginHistoryFilter>({
  page: 0,
  pageSize: 30,
  search: '',
});
</script>
