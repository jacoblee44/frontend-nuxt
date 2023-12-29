<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-x-7.5 gap-y-5">
        <RoleUsersCard v-for="user in users" :key="user.id" :user="user" />

        <RoleUsersAddCard />
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { users } = useUserList();
</script>
