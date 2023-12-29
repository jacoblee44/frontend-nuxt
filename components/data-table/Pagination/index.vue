<template>
  <div class="flex items-center">
    <div
      v-if="pageSize"
      class="flex items-center gap-2.5 border-r border-input-border pr-7.5 mr-7.5"
    >
      <span class="typo-xs">Showing</span>
      <BasicSelect v-model="pageSize" :options="pageSizeOptions" />
      <span class="typo-xs">per page</span>
    </div>
    <BasicPagination v-model="page" :page-count="pageCount" :button-count="paginationButtonCount" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  page: { type: Number, required: true },
  pageSize: { type: Number, default: null },
  pageCount: { type: Number, required: true },
  pageSizeOptions: { type: Array as PropType<number[]>, default: () => [15, 30, 50, 100] },
  paginationButtonCount: { type: Number, default: 7 },
});

const emit = defineEmits(['update:page', 'update:pageSize']);

const page = computed({
  get: () => props.page,
  set: (val) => {
    emit('update:page', val);
  },
});

const pageSize = computed({
  get: () => props.pageSize,
  set: (val) => {
    emit('update:pageSize', val);
  },
});

const pageSizeOptions = computed(() => {
  if (!props.pageSize) {
    return [];
  }
  const pageSizes = props.pageSizeOptions || [];
  if (!pageSizes.includes(props.pageSize)) {
    pageSizes.push(props.pageSize);
  }
  return pageSizes
    .sort((a, b) => a - b)
    .map((size) => ({
      label: size,
      value: size,
    }));
});
</script>
