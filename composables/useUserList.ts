import { range } from 'lodash';
import { UserModel } from '~/resources/models';
import type { IUserFilter, IUserSort } from '~/resources/interfaces/sort-filter/user.interface';

export const useUserList = (sort?: IUserSort, filter?: IUserFilter) => {
  console.debug('sort & filter', sort, filter);

  const users = range(1, 100).map(
    (i) =>
      new UserModel({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        site: 'Hof Thelker',
        avatar: i % 4 !== 2 ? '/images/avatars/jack.png' : undefined,
        role: 'Super Admin',
        countryCode: 'us',
        countryName: 'USA',
        active: i % 3 !== 0,
        lastLogin: i % 3 !== 0 ? '2022-05-22T15:12:12.887Z' : undefined,
        createdAt: '2022-05-22T15:12:12.887Z',
      }),
  );

  return {
    users,
  };
};
