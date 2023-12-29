<template>
  <client-only>
    <ckeditor
      v-model="content"
      :editor="editor"
      :value="value"
      :tag-name="tagName"
      :disabled="disabled"
    />
  </client-only>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import FullFreeBuildEditor from '@blowstack/ckeditor5-full-free-build';
import { computed, defineEmits } from 'vue';

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    value: {
      type: String,
      required: false,
    },
    tagName: {
      type: String,
      required: false,
      default: 'div',
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    uploadUrl: {
      type: String,
      required: false,
    },
    config: {
      type: Object,
      required: false,
      default: function () {},
    },
  },
  data() {
    return {
      editor: FullFreeBuildEditor,
    };
  },
  methods: {
    saveContent() {
      console.log(this.content);
    },
  },
};
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>

<style>
.ck-editor .ck-editor__main .ck-content {
  min-height: 400px;
}
</style>
