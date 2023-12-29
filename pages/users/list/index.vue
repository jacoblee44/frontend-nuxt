<template>
  <div class="flex">
    <UserSidebar />

    <div class="flex-1 flex flex-col h-screen">
      <AppHeader>
        <h2 class="font-bold">New User</h2>
      </AppHeader>

      <div class="flex-1 overflow-auto">
        <div class="p-7.5">
          <UserCreateForm />
        </div>
      </div>

      <div class="bg-white flex items-center h-17.5 px-7.5 gap-5">
        <BasicButton variant="outline">Discard Changes</BasicButton>
        <BasicButton>Publish Changes</BasicButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
