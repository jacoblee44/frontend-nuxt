<template>
  <Story title="Basic/ImageDropzonePreview">
    <Variant title="ImageDropzonePreview">
      <div class="w-20 h-20">
        <BasicImageDropzonePreview url="/images/avatar-1.png" />
      </div>
    </Variant>

    <Variant title="With remove button">
      <div class="w-20 h-20">
        <BasicImageDropzonePreview
          url="/images/avatar-1.png"
          removable
          @remove="logEvent('onRemove', {})"
        />
      </div>
    </Variant>

    <Variant title="Square">
      <div class="w-20 h-20">
        <BasicImageDropzonePreview url="/images/avatar-1.png" rounded="none" />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
</script>
