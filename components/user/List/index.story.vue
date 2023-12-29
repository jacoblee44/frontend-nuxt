<template>
  <Story title="User/List">
    <Variant title="UserList">
      <UserList
        v-model:selected-ids="selectedIds"
        :users="users"
        multi-select
        @update:selected-ids="logEvent('Selection changed', $event)"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const { users } = useUserList();

const selectedIds = ref<string[]>([]);
</script>
