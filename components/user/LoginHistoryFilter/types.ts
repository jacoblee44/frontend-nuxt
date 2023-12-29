import { SortDirection } from '~/resources/enums';

export interface ILoginHistoryFilter {
  search: string;
  page: number;
  pageSize: number;
  sortField?: string;
  sortDir?: SortDirection;

  browser?: string;
  platform?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
}
