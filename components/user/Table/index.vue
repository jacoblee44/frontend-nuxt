<template>
  <DataTable :columns="columns" :data="users">
    <template #td-country="{ row }">
      <div class="flex items-center justify-center gap-1">
        <span :class="`fi fi-${row.countryCode} rounded-sm`" />
        <span class="typo-sm font-bold">{{ row.countryName }}</span>
      </div>
    </template>
    <template #td-status="{ row }">
      <BasicBadge v-if="row.active" label="Active" status="success" />
      <BasicBadge v-if="!row.active" label="Inactive" status="danger" />
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import type { ITableColumnDef } from '~/components/basic/Table/types';
import { UserModel } from '~/resources/models';
const { formatDateTime } = useDateUtils();

defineProps({
  users: {
    type: Array as PropType<UserModel[]>,
    required: true,
  },
});

const columns: ITableColumnDef<UserModel>[] = [
  { id: 'name', title: 'Name', valueGetter: (row) => row.fullName },
  { id: 'email', title: 'Email' },
  { id: 'role', title: 'Role' },
  { id: 'country', title: 'Country', align: 'center' },
  { id: 'status', title: 'Status', align: 'center' },
  { id: 'site', title: 'Site' },
  {
    id: 'lastLogin',
    title: 'Last Login',
    valueGetter: (row) => (row.lastLogin ? formatDateTime(row.lastLogin) : 'Never'),
  },
  {
    id: 'createdAt',
    title: 'Registration Date',
    valueGetter: (row) => formatDateTime(row.createdAt),
  },
];
</script>
