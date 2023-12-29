<template>
  <form class="flex flex-col h-full" @submit="onSubmit">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="grid grid-cols-2 gap-x-7.5">
        <div>
          <FormInput placeholder="SEO Title" class="mb-5" name="title" />
          <FormInput placeholder="SEO Title" name="title1" />
        </div>

        <div>
          <FormTextarea placeholder="SEO Description" class="h-full" name="description" />
        </div>
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard</BasicButton>
      <BasicButton type="submit">Publish</BasicButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object({
  title: Yup.string().label('Title').required(),
  title1: Yup.string().label('Title').required(),
  description: Yup.string().label('Description').required(),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
