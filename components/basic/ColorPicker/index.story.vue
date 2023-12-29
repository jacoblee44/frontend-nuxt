<template>
  <Story title="Basic/ColorPicker">
    <Variant title="ColorPicker">
      <BasicColorPicker
        v-model="color"
        @update:model-value="logEvent('Value changed', { value: $event })"
      />
    </Variant>

    <Variant title="Clearable">
      <div style="padding: 10px">
        <BasicColorPicker
          v-model="color"
          clearable
          @update:model-value="logEvent('Value changed', { value: $event })"
        />
      </div>
    </Variant>

    <Variant title="Disabled">
      <BasicColorPicker
        v-model="color"
        disabled
        @update:model-value="logEvent('Value changed', { value: $event })"
      />
    </Variant>

    <Variant title="ColorPicker with error">
      <BasicColorPicker
        v-model="color"
        error
        @update:model-value="logEvent('Value changed', { value: $event })"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const color = ref('#ACE374');
</script>
