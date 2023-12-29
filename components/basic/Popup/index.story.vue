<template>
  <Story title="Basic/Popup">
    <Variant title="BasicPopup">
      <div class="w-full h-200 flex items-center justify-center">
        <BasicPopup class="!w-50 h-80" arrow>
          <template #button>
            <BasicButton>Open Popup</BasicButton>
          </template>

          <div class="w-full h-full flex items-center justify-center">Content</div>
        </BasicPopup>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts"></script>
