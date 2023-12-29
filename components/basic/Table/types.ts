export type TableCellAlign = 'left' | 'center' | 'right';

export interface ITableColumnDef<T = any> {
  id: string;
  title?: string;
  valueGetter?: (row: T, index: number) => any;
  align?: TableCellAlign;
  searchable?: boolean;
  sortable?: boolean;
  thClass?: string;
  tdClass?: string;
}
