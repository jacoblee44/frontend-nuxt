<template>
  <div class="flex items-center gap-1.5 select-none cursor-default">
    <slot name="prev">
      <i
        class="new-h24-icon-arrow text-[12px] p-1"
        :class="page === 0 ? 'text-input-border pointer-events-none' : 'cursor-pointer'"
        @click="changePage(page - 1)"
      />
    </slot>
    <div
      v-for="(item, i) in buttons"
      :key="i"
      class="w-6.5 h-6.5 flex items-center justify-center rounded-sm transition-all"
      :class="[
        item.page === page
          ? 'typo-h4 font-bold shadow-pagination-btn'
          : 'typo-h5 hover:shadow-pagination-btn cursor-pointer',
        item.type === 'omission' && 'pointer-events-none',
      ]"
      @click="changePage(item.page as number)"
    >
      {{ item.type === 'button' ? item.page + 1 : '...' }}
    </div>
    <slot name="next">
      <i
        class="new-h24-icon-arrow text-[12px] rotate-180 p-1"
        :class="page === pageCount - 1 ? 'text-input-border pointer-events-none' : 'cursor-pointer'"
        @click="changePage(page + 1)"
      />
    </slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: { type: Number, required: true },
  pageCount: { type: Number, required: true },
  buttonCount: { type: Number, default: 7 },
});

const emit = defineEmits(['update:modelValue']);

type PaginationButtonType = 'button' | 'omission';
type PaginationItem = {
  type: PaginationButtonType;
  page?: number;
};

const page = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});

const changePage = (newPage: number) => {
  if (newPage !== props.modelValue) {
    page.value = newPage;
  }
};

const buttons = computed((): PaginationItem[] => {
  const paginationItems: PaginationItem[] = [];
  if (props.pageCount <= props.buttonCount) {
    // x,x,x,x
    for (let i = 0; i < Math.max(1, props.pageCount); i++) {
      paginationItems.push({
        type: 'button',
        page: i,
      });
    }
  } else if ([0, 1, props.pageCount - 2, props.pageCount - 1].includes(page.value)) {
    // x,x,x,...,x,x,x
    for (let i = 0; i < props.buttonCount; i++) {
      if (i < 3) {
        paginationItems.push({
          type: 'button',
          page: i,
        });
      } else if (i === 3) {
        paginationItems.push({
          type: 'omission',
        });
      } else {
        paginationItems.push({
          type: 'button',
          page: props.pageCount - (props.buttonCount - i),
        });
      }
    }
  } else if ([2, 3].includes(page.value)) {
    // x,x,x,x,x,...,x
    for (let i = 0; i < props.buttonCount; i++) {
      if (i < 5) {
        paginationItems.push({
          type: 'button',
          page: i,
        });
      } else if (i === 5) {
        paginationItems.push({
          type: 'omission',
        });
      } else {
        paginationItems.push({
          type: 'button',
          page: props.pageCount - 1,
        });
      }
    }
  } else if ([props.pageCount - 4, props.pageCount - 3].includes(page.value)) {
    // x,...,x,x,x,x,x
    for (let i = 0; i < props.buttonCount; i++) {
      if (i === 0) {
        paginationItems.push({
          type: 'button',
          page: 0,
        });
      } else if (i === 1) {
        paginationItems.push({
          type: 'omission',
        });
      } else {
        paginationItems.push({
          type: 'button',
          page: props.pageCount - (props.buttonCount - i),
        });
      }
    }
  } else {
    // x,...,x,x,x,...,x
    for (let i = 0; i < props.buttonCount; i++) {
      if (i === 0) {
        paginationItems.push({
          type: 'button',
          page: 0,
        });
      } else if (i === 1 || i === 5) {
        paginationItems.push({
          type: 'omission',
        });
      } else if (i === 6) {
        paginationItems.push({
          type: 'button',
          page: props.pageCount - 1,
        });
      } else {
        const diff = 3 - i;
        paginationItems.push({
          type: 'button',
          page: page.value - diff,
        });
      }
    }
  }
  return paginationItems;
});
</script>
