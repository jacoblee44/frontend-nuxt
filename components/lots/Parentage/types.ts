export interface IParentageItem {
  name: string;
  description?: string;
  rowIndex: number;
  rowSpan: number;
  items?: IParentageItem[];
}
