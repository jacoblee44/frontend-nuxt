<template>
  <div class="rounded-sm bg-shade-eb py-3.5 px-5">
    <div class="pb-3.5 border-b border-shade-97/50">
      <p class="font-bold">General</p>
    </div>
    <div class="pt-4.5">
      <div class="flex items-center mb-5">
        <div class="w-43">
          <span class="font-bold">Gender</span>
        </div>
        <BasicEditBox v-model="gender" :has-border="false" input-class="font-normal" />
      </div>

      <div class="flex items-center mb-5">
        <div class="w-43">
          <span class="font-bold">Born</span>
        </div>
        <BasicEditBox v-model="born" :has-border="false" input-class="font-normal" />
      </div>

      <div class="flex items-center mb-5">
        <div class="w-43">
          <span class="font-bold">Life ID</span>
        </div>
        <BasicEditBox v-model="lifeId" :has-border="false" input-class="font-normal" />
      </div>
    </div>
  </div>

  <div class="rounded-sm bg-shade-eb py-3.5 px-5 mt-7.5">
    <div class="pb-3.5 border-b border-shade-97/50">
      <p class="font-bold">Veterinarians documents</p>
    </div>
    <div class="pt-4.5">
      <span class="text-sm"> You can upload multiple files at once </span>
      <BasicPdfDropzone class="w-30 h-30 mt-4.5" placeholder-text="Drop PDF here" />
    </div>
  </div>
</template>

<script setup lang="ts">
const gender = ref('Colt');
const born = ref('03.20.2021');
const lifeId = ref('DE 431 31 98753 21');
</script>
