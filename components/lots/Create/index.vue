<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <p class="font-bold mb-2">Add images</p>
      <p class="mb-4.5">Labeled images are required, but you can always add more.</p>

      <div class="flex gap-5 mb-15">
        <div class="w-114 flex-shrink-0 gap-5">
          <BasicImageDropzone
            v-model="headImg"
            class="w-full h-102"
            clearable
            :placeholder-icon-size="80"
            placeholder-text="Drop image here"
          />
          <div class="bg-white py-1 flex items-center justify-center">
            <span class="text-sm font-bold">Head</span>
          </div>
        </div>

        <div class="flex-grow w-0 flex items-start flex-wrap gap-5">
          <div>
            <BasicImageDropzone
              v-model="movingImg"
              class="w-50 h-50"
              clearable
              :placeholder-icon-size="80"
              placeholder-text="Drop image here"
            />
            <div class="bg-white py-1 flex items-center justify-center">
              <span class="text-sm font-bold">Moving</span>
            </div>
          </div>

          <div>
            <BasicImageDropzone
              v-model="standingImg"
              class="w-50 h-50"
              clearable
              :placeholder-icon-size="80"
              placeholder-text="Drop image here"
            />
            <div class="bg-white py-1 flex items-center justify-center">
              <span class="text-sm font-bold">Standing</span>
            </div>
          </div>

          <BasicImageDropzone
            v-for="(image, index) in images"
            :key="index"
            :model-value="image"
            class="w-50 h-50"
            clearable
            :placeholder-icon-size="80"
            placeholder-text="Drop multiple images here"
            @drop="handleDrop"
          />
        </div>
      </div>

      <LotsGeneral />
      <LotsParentage />
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const headImg = ref('');
const movingImg = ref('');
const standingImg = ref('');
const images = ref(['']);

const handleDrop = (files: File[]) => {
  files.forEach((file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      images.value.unshift(reader.result as string);
    };
  });
};
</script>
