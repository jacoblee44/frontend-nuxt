import type { IRadioOption } from '~/components/basic/RadioGroup/types';
import { SortDirection } from '~/resources/enums';

export const SORTDIROPTIONS: IRadioOption[] = [
  { label: 'A - Z', value: SortDirection.ASC },
  { label: 'Z - A', value: SortDirection.DESC },
];
