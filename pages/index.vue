<template>
  <div>
    <AppHeader>
      <h1 class="font-bold text-dark text-2xl">Dashboard Page</h1>

      <template #actions>
        <AppHeaderLanguageSelect />
        <div class="bg-white flex items-center gap-5 pl-5 border-l border-shade-eb ml-5">
          <BasicButton variant="outline">Duplicate</BasicButton>
          <BasicButton variant="outline">Delete</BasicButton>
        </div>
      </template>
    </AppHeader>
  </div>
</template>

<script setup lang="ts"></script>
