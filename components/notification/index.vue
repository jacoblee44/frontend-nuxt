<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="grid grid-cols-2 gap-15 mt-7.5">
        <div>
          <h3 class="font-bold mb-5">Notification type</h3>
          <div class="flex mb-10">
            <BasicRadioGroupRow
              :model-value="filter.type"
              :options="USER_TYPE_OPTIONS"
              @update:model-value="onChangeFilter('type', $event)"
            />
          </div>
          <h3 class="font-bold mb-5">Content</h3>
          <div class="flex items-center justify-between mb-5">
            <span>Visible On Parent Site</span>
            <BasicSwitch v-model="visibleParentSite" />
          </div>
          <form class="flex flex-col h-full">
            <FormInput name="subject" placeholder="Subject" class="mb-5" />
          </form>
        </div>
        <div>
          <h3 class="font-bold mb-5">Data and time</h3>
          <div class="flex mb-10">
            <BasicRadioGroupRow
              :model-value="filter.date"
              :options="USER_DATE_OPTIONS"
              @update:model-value="onChangeFilter('date', $event)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { USER_TYPE_OPTIONS, USER_DATE_OPTIONS } from './constants';
    import type { IUserFilter } from './types';
    import FromToDatePicker from '~/components/basic/FromToDatePicker/index.vue';
    
    const props = defineProps({
        modelValue: {
            type: Object as PropType<IUserFilter>,
            required: true,
        }
    });
    const value = ref();
    const filter = ref<IUserFilter>(props.modelValue);
    const visibleParentSite = ref(true);

    watch(
        () => props.modelValue,
        (newValue) => {
            filter.value = newValue;
        },
    );
    const onChangeFilter = (name: keyof IUserFilter, value: never) => {
        filter.value[name] = value;
    };
</script>
