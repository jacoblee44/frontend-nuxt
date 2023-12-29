<template>
  <div class="flex items-center justify-between pb-7.5">
    <div class="flex items-center flex-1 gap-5">
      <BasicCheckbox
        label="Check all"
        class="gap-[5px] font-bold"
        :checked="checkedAll"
        :disabled="!multiple"
        @change="onToggleCheckAll"
      />

      <BasicSelect v-model="multiple" :options="actions" class="flex-1" color="light" />
    </div>

    <div
      class="flex items-center text-shade-3d gap-7.5 pl-7.5 border-l border-shade-eb h-8.5 ml-7.5"
    >
      <slot name="filter">
        <span class="cursor-pointer hover:opacity-80">
          <i class="new-h24-icon-filter text-[18px] w-4.5 h-4.5" />
        </span>
      </slot>

      <span v-if="!expanded" class="cursor-pointer hover:opacity-80">
        <i class="new-h24-icon-search text-[18px] w-4.5 h-4.5" />
      </span>

      <BasicInput
        v-if="expanded"
        v-model="search"
        :placeholder="searchPlaceholder"
        input-box-class="!pr-0.5"
      >
        <template #suffix>
          <BasicIconButton class="!w-8 !h-8">
            <i class="new-h24-icon-search text-[18px]"></i>
          </BasicIconButton>
        </template>
      </BasicInput>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  expanded: {
    type: Boolean,
    default: false,
  },
  checkedAll: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  search: {
    type: String,
    default: '',
  },
  searchPlaceholder: {
    type: String,
    default: 'Search',
  },
});

const emit = defineEmits(['checkAll', 'update:multiple', 'update:search']);

const actions = [
  { label: 'Bulk Action', value: true },
  { label: 'Single Action', value: false },
];

const multiple = computed({
  get: () => props.multiple,
  set: (val) => {
    emit('update:multiple', val);
  },
});

const search = computed({
  get: () => props.search,
  set: (val) => {
    emit('update:search', val);
  },
});

const onToggleCheckAll = (checkAll: boolean) => {
  emit('checkAll', checkAll);
};
</script>
