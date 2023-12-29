<template>
  <form class="flex flex-col h-full" @submit="onSubmit">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="mb-7.5">
        <h2 class="font-bold text-xl mb-4">Set up</h2>

        <FormInput name="description" placeholder="Description" class="mb-5" />
        <p class="mb-1.5">Country</p>
        <div class="grid grid-cols-2 gap-x-11 mb-6">
          <FormSelect name="country" :options="countryOptions" placeholder="Select country" />
          <FormInput name="subdomain" placeholder="Subdomain" suffix=".horse.com" />
        </div>

        <p class="font-bold mb-2">Alias</p>
        <p class="mb-2">
          Optionally specify aliases here to provide a CNAME link from the platform of the site to
          the subdomain of the site here on olr24.com.
        </p>

        <div
          v-for="(item, index) in values.aliases"
          :key="item.id"
          class="flex w-full gap-7.5 mb-5"
        >
          <div class="grid grid-cols-2 gap-7.5 flex-grow">
            <FormInput :name="`aliases[${index}].rootDomain`" placeholder="Root domain at site*" />
            <FormInput :name="`aliases[${index}].subDomain`" placeholder="Subdomain at site*" />
          </div>

          <BasicIconButton v-if="index === 0" class="flex-shrink-0" @click="addAliasItem">
            <i class="new-h24-icon-add text-[14px] w-3.5 h-3.5"></i>
          </BasicIconButton>

          <BasicIconButton
            v-else
            class="flex-shrink-0"
            variant="secondary"
            @click="removeAliasItem(item.id)"
          >
            <IconTrash class="w-5 h-5" />
          </BasicIconButton>
        </div>
      </div>

      <div class="mb-7.5">
        <h2 class="font-bold text-xl mb-4">Billing Settings</h2>

        <p class="mb-1.5">Currency</p>
        <div class="grid grid-cols-3 gap-x-7.5 mb-6">
          <FormSelect name="currency" :options="currencyOptions" />
          <FormInput name="countryVat" placeholder="Country VAT*" />
          <FormInput name="insuranceVat" placeholder="Insurance VAT*" />
        </div>
      </div>

      <div class="mb-7.5">
        <h2 class="font-bold text-xl mb-3">Languages</h2>

        <div class="grid grid-cols-2 gap-x-7.5 mb-6">
          <FormSelect
            name="defaultLanguage"
            :options="languageOptions"
            :show-image="false"
            label="Default language"
          />
          <FormSelect
            name="secondaryLanguage"
            :options="languageOptions"
            :show-image="false"
            label="Secondary language"
          />
        </div>
      </div>

      <div>
        <h2 class="font-bold text-xl mb-4">Marketing information</h2>

        <div class="grid grid-cols-2 gap-x-7.5 items-end mb-6">
          <FormInput name="googleCode" placeholder="Google Analytics Code" />
          <FormInput name="facebookCode" placeholder="Facebook Pixel Code" />
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
import { languageOptions } from '~/constants';

const schema = Yup.object({
  description: Yup.string().label('Description').required(),
  country: Yup.string().label('Country').required(),
  subdomain: Yup.string().label('Subdomain').required(),
  currency: Yup.string().label('Currency').required(),
  countryVat: Yup.string().label('Country VAT').required(),
  insuranceVat: Yup.string().label('Insurance VAT').required(),
  defaultLanguage: Yup.string().label('Default Language').required(),
  secondaryLanguage: Yup.string().label('Secondary Language'),
  googleCode: Yup.string().label('Google Analytics Code'),
  facebookCode: Yup.string().label('Facebook Pixel Code'),
  aliases: Yup.array().of(
    Yup.object().shape({
      rootDomain: Yup.string().required('Root domain is required'),
      subDomain: Yup.string().required('Subdomain is required'),
    }),
  ),
});

const { handleSubmit, values, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    currency: 'EUR',
    aliases: [{ rootDomain: '', subDomain: '', id: Math.random() }],
  },
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

const countryOptions = [
  { label: 'Germany', value: 'DE', img: '/images/flags/de.png' },
  { label: 'United Kingdom', value: 'UK', img: '/images/flags/en.png' },
];

const currencyOptions = [
  { label: 'EUR', value: 'EUR' },
  { label: 'USD', value: 'USD' },
];

const addAliasItem = () => {
  setFieldValue('aliases', [
    ...values.aliases,
    { rootDomain: '', subDomain: '', id: Math.random() },
  ]);
};

const removeAliasItem = (id: number) => {
  const newAliasItem = values.aliases.filter((item) => item.id !== id);
  setFieldValue('aliases', newAliasItem);
};
</script>
