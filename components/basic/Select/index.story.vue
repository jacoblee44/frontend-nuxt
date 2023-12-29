<template>
  <Story title="Basic/Select">
    <Variant title="Default BasicSelect">
      <BasicSelect v-model="value" placeholder="Select" :options="options1" />
    </Variant>

    <Variant title="BasicSelect with light color">
      <BasicSelect v-model="value" placeholder="Select" :options="options1" color="light" />
    </Variant>

    <Variant title="BasicSelect with label">
      <BasicSelect v-model="value" placeholder="Select" :options="options1" label="Select Label" />
    </Variant>

    <Variant title="BasicSelect with flag images">
      <BasicSelect v-model="language" placeholder="Select" :options="languageOptions" />
    </Variant>

    <Variant title="BasicSelect with error">
      <BasicSelect
        v-model="value"
        placeholder="Select"
        :options="options1"
        label="Select Label"
        error="This field is required."
      />
    </Variant>

    <Variant title="BasicSelect with custom option">
      <BasicSelect v-model="value" placeholder="Select" :options="options1" label="Select Label">
        <template #option="{ option, selected }">
          <div :class="['italic underline', selected && 'font-bold']">{{ option.label }}</div>
        </template>
      </BasicSelect>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicSelect from './index.vue';
import { languageOptions } from '~/constants';
import { Language } from '~/resources/enums';

const value = ref('');
const language = ref(Language.DE);

const options1 = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
];
</script>
