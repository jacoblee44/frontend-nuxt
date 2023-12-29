<template>
  <DataTable :columns="columns" :data="loginHistories" />
</template>

<script setup lang="ts">
import type { ITableColumnDef } from '~/components/basic/Table/types';
import { LoginHistoryModel } from '~/resources/models';
const { formatDateTime } = useDateUtils();

defineProps({
  loginHistories: {
    type: Array as PropType<LoginHistoryModel[]>,
    required: true,
  },
});

const columns: ITableColumnDef<LoginHistoryModel>[] = [
  { id: 'user', title: 'User', valueGetter: (row) => row.user.fullName },
  { id: 'ipAddress', title: 'IP Address' },
  {
    id: 'loginAt',
    title: 'Login at',
    valueGetter: (row) => formatDateTime(row.loginAt),
  },
  { id: 'browser', title: 'Browser' },
  { id: 'platform', title: 'Platform' },
  { id: 'devices', title: 'Devices' },
];
</script>
