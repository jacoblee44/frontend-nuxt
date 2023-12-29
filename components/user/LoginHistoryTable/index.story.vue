<template>
  <Story title="User/LoginHistoryTable">
    <Variant title="LoginHistoryTable">
      <UserLoginHistoryTable :login-histories="loginHistories" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const { loginHistories } = useLoginHistoryList();
</script>
