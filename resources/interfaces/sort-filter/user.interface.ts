import { SortDirection } from '~/resources/enums';
import { UserModel } from '~/resources/models';

export type IUserFilter = Partial<UserModel>;

export interface IUserSortCriterion {
  field: keyof UserModel;
  direction: SortDirection;
}

export interface IUserSort {
  criteria: IUserSortCriterion[];
}
