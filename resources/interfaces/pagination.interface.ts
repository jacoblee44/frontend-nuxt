import { SortDirection } from '~/resources/enums';

export interface IPagination {
  search?: string;
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortDir?: SortDirection;
}
