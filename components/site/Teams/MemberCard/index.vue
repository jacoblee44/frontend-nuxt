<template>
  <div>
    <div
      v-if="!isEditMode && !member"
      class="flex items-center justify-center w-full min-h-38.5 rounded-sm border-4 border-dashed hover:border-solid hover:border border-shade-93 cursor-pointer"
      @click="toggleMode"
    >
      <div
        class="w-15 h-15 flex items-center justify-center rounded-full border-sm border-shade-97"
      >
        <i class="new-h24-icon-add text-[24px] w-6 h-6 text-shade-97"></i>
      </div>
    </div>

    <div v-else class="bg-white rounded-0.5 min-h-38.5">
      <div class="pt-2.5 px-2.5 mb-3 flex items-center justify-end gap-4.5">
        <IconTrash class="text-accent w-4 h-4 cursor-pointer" @click="onCancel" />
        <IconCheckOutline
          v-if="isEditMode"
          class="w-4 h-4 cursor-pointer"
          :class="{
            'pointer-events-none text-shade-8f': !isFormValid,
            'text-accent': isFormValid,
          }"
          @click="onConfirm"
        />
        <i
          v-else
          class="new-h24-icon-edit text-accent text-[15px] w-[15px] h-[15px] cursor-pointer hover:opacity-80"
          @click="setAsEditMode"
        />
      </div>

      <div v-if="isEditMode" class="px-5 pb-5 flex gap-5">
        <BasicImageDropzone
          v-model="avatar"
          class="w-25 h-25"
          clearable
          :placeholder-icon-size="60"
        />

        <div class="w-full grid grid-cols-2 gap-5">
          <BasicInput v-model="name" placeholder="Name" color="light" />
          <BasicInput v-model="phone" placeholder="Phone number" color="light" />
          <BasicInput v-model="title" placeholder="Title" color="light" />
          <BasicInput v-model="email" placeholder="Email" color="light" />
        </div>
      </div>

      <div v-if="!isEditMode && member" class="px-5 pb-5 flex gap-2.5">
        <div
          class="bg-cover bg-no-repeat bg-center rounded-sm w-24.5 h-24.5 flex-shrink-0"
          :style="{ backgroundImage: `url(${member.avatar})` }"
        ></div>

        <div>
          <p class="font-bold text-xl">{{ member.name }}</p>
          <p class="font-bold text-sm mb-2.5">{{ member.title }}</p>
          <p>{{ member.phone }}</p>
          <p>{{ member.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TeamMemberModel } from '~/resources/models';

const props = defineProps({
  member: {
    type: Object as PropType<TeamMemberModel>,
    default: () => null,
  },
});

const emit = defineEmits(['save', 'remove', 'update']);

const isEditMode = ref(false);

const name = ref('');
const title = ref('');
const phone = ref('');
const email = ref('');
const avatar = ref('');

const isFormValid = computed(() => {
  return !!name.value && title.value && phone.value && email.value && avatar.value;
});

const toggleMode = () => {
  isEditMode.value = !isEditMode.value;
};

const setAsEditMode = () => {
  isEditMode.value = true;
};

const setAsViewMode = () => {
  isEditMode.value = false;
};

const resetValues = () => {
  name.value = props.member?.name ?? '';
  title.value = props.member?.title ?? '';
  phone.value = props.member?.phone ?? '';
  email.value = props.member?.email ?? '';
  avatar.value = props.member?.avatar ?? '';
};

const onConfirm = () => {
  setAsViewMode();

  if (props.member) {
    emit(
      'update',
      new TeamMemberModel({
        id: props.member.id,
        name: name.value,
        email: email.value,
        title: title.value,
        phone: phone.value,
        avatar: avatar.value,
      }),
    );
  } else {
    emit(
      'save',
      new TeamMemberModel({
        name: name.value,
        email: email.value,
        title: title.value,
        phone: phone.value,
        avatar: avatar.value,
      }),
    );
  }

  resetValues();
};

const onCancel = () => {
  if (props.member && !isEditMode.value) {
    emit('remove');
  }
  setAsViewMode();
  resetValues();
};

onMounted(() => {
  resetValues();
});
</script>
