<template>
  <div
    class="flex items-center relative"
    :class="{ 'border-b border-dashed border-shade-70': hasBorder }"
    @click="handleClick"
  >
    <input
      ref="editInput"
      v-model="value"
      :class="
        twMerge(
          'outline-none border-none font-bold text-dark text-base max-w-100 bg-transparent placeholder:text-shade-8f focus:[&::placeholder]:opacity-0',
          inputClass,
        )
      "
      :style="{ width: inputWidth + 'px' }"
      :placeholder="placeholder"
      :disabled="!editable"
      @input="handleInput"
    />

    <div
      ref="contentDiv"
      :class="
        twMerge('absolute font-bold text-base whitespace-nowrap !opacity-0 z-[-1]', inputClass)
      "
    >
      {{ value || placeholder }}
    </div>

    <span class="flex items-center ml-5 gap-3">
      <i
        v-if="!editable"
        class="new-h24-icon-edit text-accent text-[15px] w-[15px] h-[15px] cursor-pointer hover:opacity-80"
        @click="setAsEditMode"
      />
      <template v-else>
        <i
          class="new-h24-icon-close text-[15px] w-[15px] h-[15px] text-accent cursor-pointer hover:opacity-80"
          @click="onCancel"
        />

        <i
          class="new-h24-icon-checkbox text-[15px] w-[15px] h-[15px] text-accent cursor-pointer hover:opacity-80"
          :class="{
            'pointer-events-none text-shade-8f': !value,
          }"
          @click="onConfirm"
        />
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  minWidth: {
    type: Number,
    default: 30,
  },
  defaultEditable: {
    type: Boolean,
    default: false,
  },
  hasBorder: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue', 'save', 'cancel']);

const value = ref(props.modelValue);

const contentDiv: Ref<HTMLElement | null> = ref(null);
const editInput: Ref<HTMLElement | null> = ref(null);
const editable = ref(props.defaultEditable ?? false);
const inputWidth = ref(100);
const initValue = ref(props.modelValue);

const handleInput = () => {
  if (contentDiv.value) {
    inputWidth.value = Math.max(contentDiv.value.clientWidth, props.minWidth);
  }
};

watch(
  () => props.modelValue,
  (val) => {
    if (!editable.value) {
      value.value = val;
      initValue.value = val;
    }

    updateInputWidth();
  },
);

const handleClick = (e: Event) => {
  e.stopPropagation();
};

const setAsEditMode = () => {
  editable.value = true;

  if (editInput.value) {
    setTimeout(() => {
      editInput.value?.focus();
    }, 50);
  }
};

const updateInputWidth = () => {
  if (contentDiv.value) {
    setTimeout(() => {
      inputWidth.value = Math.max(contentDiv.value?.clientWidth ?? 0, props.minWidth);
    }, 50);
  }
};

const setAsViewMode = () => {
  editable.value = false;
  updateInputWidth();
};

const onConfirm = () => {
  setAsViewMode();
  emit('save', value.value);
};

const onCancel = () => {
  value.value = initValue.value;
  emit('cancel');
  setTimeout(() => {
    setAsViewMode();
  }, 50);
};

onMounted(() => {
  updateInputWidth();

  if (editable.value && editInput.value) {
    editInput.value?.focus();
  }
});
</script>
