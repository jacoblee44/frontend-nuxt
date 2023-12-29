export interface IPermission {
  id: number;
  name: string;
  items?: IPermission[];
}
