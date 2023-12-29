import type { IRadioOption } from '~/components/basic/RadioGroup/types';

export const USER_TYPE_OPTIONS: IRadioOption[] = [
  { label: 'Alert (red)', value: 1 },
  { label: 'Informative (blue)', value: 2 },
  { label: 'Warning (yellow)', value: 3 },
];

export const USER_DATE_OPTIONS: IRadioOption[] = [
  { label: 'Date range', value: true },
  { label: 'Duration', value: false },
];
