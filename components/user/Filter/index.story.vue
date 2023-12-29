<template>
  <Story title="User/Filter">
    <Variant title="UserFilter">
      <div class="flex justify-center p-10">
        <UserFilter v-model="filters" @update:model-value="logEvent('Filter applied', $event)" />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import type { IUserFilter } from '~/components/user/Filter/types';

const filters = ref<IUserFilter>({
  page: 0,
  pageSize: 30,
  search: '',
});
</script>
