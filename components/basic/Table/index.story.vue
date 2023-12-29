<template>
  <Story title="Basic/Table">
    <Variant title="BasicTable">
      <BasicTable :columns="columns" :data="users">
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
      </BasicTable>
    </Variant>
    <Variant title="No Data">
      <BasicTable :columns="columns" :data="[]" />
      <BasicTable :columns="columns" :data="[]">
        <template #no-data>
          <div class="text-center p-20">No users are available</div>
        </template>
      </BasicTable>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { ITableColumnDef } from './types';
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
