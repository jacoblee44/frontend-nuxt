import type { IRadioOption } from '~/components/basic/RadioGroup/types';

export const browserOptions: IRadioOption[] = [
  { label: 'Google Chrome', value: 'Google Chrome' },
  { label: 'Firefox', value: 'Firefox' },
  { label: 'Opera', value: 'Opera' },
  { label: 'Microsoft Edge', value: 'Microsoft Edge' },
];

export const platformOptions: IRadioOption[] = [
  { label: 'Windows', value: 'Windows' },
  { label: 'mac OSX', value: 'mac OSX' },
  { label: 'Android', value: 'Android' },
  { label: 'IOS', value: 'IOS' },
];

export const DATEPICKERFORMATTER = {
  date: 'YYYY-MM-DD',
  month: 'MMM',
};
