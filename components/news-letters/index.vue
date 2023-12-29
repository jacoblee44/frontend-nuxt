<template>
  <form class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="mb-7.5">
        <FormInput name="subject" placeholder="Subject" class="mb-5" />
      </div>
      <div class="mb-7.5">
        <h2 class="font-bold text-xl mb-4">Content</h2>
        <client-only>
          <BasicRichEditor v-model="content" />
        </client-only>
      </div>
      <div class="flex align-items: center">
        <h2 class="font-bold text-xl">Subscribers</h2>
        <div class="ml-2 text-xl">{{ counter }}</div>
      </div>
    </div>
  </form>
  <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
    <BasicButton variant="outline">Discard Changes</BasicButton>
    <BasicButton type="submit">Publish Changes</BasicButton>
  </div>
</template>

<script setup lang="ts">
const content = ref('');
const counter = 123;
</script>
