<template>
  <Story title="Form/ColorPicker">
    <Variant title="ColorPicker">
      <FormColorPicker name="color" />
    </Variant>

    <Variant title="Clearable">
      <div style="padding: 10px">
        <FormColorPicker name="color" clearable />
      </div>
    </Variant>

    <Variant title="Disabled">
      <FormColorPicker name="color" disabled />
    </Variant>

    <Variant title="ColorPicker with error">
      <FormColorPicker name="color" error />
    </Variant>
  </Story>
</template>

<script setup lang="ts"></script>
