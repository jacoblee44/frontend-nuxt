<template>
  <Story title="DataTable">
    <Variant title="DataTable">
      <DataTable :columns="columns" :data="users" />
    </Variant>
    <Variant title="No Data">
      <DataTable :columns="columns" :data="[]" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { ITableColumnDef } from '~/components/basic/Table/types';
import { UserModel } from '~/resources/models';

const { users } = useUserList();

const columns: ITableColumnDef<UserModel>[] = [
  { id: 'name', title: 'Name', valueGetter: (row) => row.fullName },
  { id: 'email', title: 'Email' },
  { id: 'role', title: 'Role' },
  { id: 'country', title: 'Country', align: 'center' },
  { id: 'status', title: 'Status', align: 'center' },
  { id: 'site', title: 'Site' },
];
</script>
