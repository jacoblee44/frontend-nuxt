import { SortDirection } from '~/resources/enums';

export interface IUserFilter {
  search: string;
  page: number;
  pageSize: number;
  sortField?: string;
  sortDir?: SortDirection;

  active?: boolean;
  role?: string;
}
