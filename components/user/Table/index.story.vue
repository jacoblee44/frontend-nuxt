<template>
  <Story title="User/Table">
    <Variant title="UsersTable">
      <UserTable :users="users" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const { users } = useUserList();
</script>
