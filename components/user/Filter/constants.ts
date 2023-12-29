import type { IRadioOption } from '~/components/basic/RadioGroup/types';
import type { ISelectOption } from '~/components/basic/Select/types';

export const USER_STATUS_OPTIONS: IRadioOption[] = [
  { label: 'Active', value: true },
  { label: 'Inactive', value: false },
];

export const USER_ROLE_OPTIONS: ISelectOption[] = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
];
