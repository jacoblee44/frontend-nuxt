import { SortDirection } from '~/resources/enums';
import { NoticeType } from '~/resources/enums';
import { DateType } from '~/resources/enums';

export interface IUserFilter {
  search: string;
  page: number;
  pageSize: number;
  sortField?: string;
  sortDir?: SortDirection;
  date?:  DateType;
  type?: NoticeType;
  active?: boolean;
  role?: string;
}
