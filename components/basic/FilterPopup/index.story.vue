<template>
  <Story title="Basic/FilterPopup">
    <Variant title="BasicFilterPopup">
      <div class="flex justify-center p-10">
        <BasicFilterPopup
          class="max-h-80"
          @reset="logEvent('onReset', {})"
          @apply="logEvent('onApply', {})"
        >
          <div class="text-center py-10">Content</div>
        </BasicFilterPopup>
      </div>
    </Variant>

    <Variant title="BasicFilterPopup with custom button">
      <div class="flex justify-center p-10">
        <BasicFilterPopup
          class="max-h-80"
          anchor-pos="start"
          @reset="logEvent('onReset', {})"
          @apply="logEvent('onApply', {})"
        >
          <template #button>
            <BasicButton>Open Popup</BasicButton>
          </template>
          <div class="text-center py-10">Content</div>
        </BasicFilterPopup>
      </div>
    </Variant>

    <Variant title="BasicFilterPopup with custom title & action">
      <div class="flex justify-center p-10">
        <BasicFilterPopup
          class="max-h-80"
          title="Custom Filter"
          x-pos="right"
          @reset="logEvent('onReset', {})"
          @apply="logEvent('onApply', {})"
        >
          <div class="text-center py-10">Content</div>
          <template #actions="{ close }">
            <BasicButton class="w-full mt-7" variant="outline" @click="close()">Close</BasicButton>
          </template>
        </BasicFilterPopup>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
</script>
