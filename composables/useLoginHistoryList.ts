import { range } from 'lodash';
import type { IPagination } from '~/resources/interfaces';
import { LoginHistoryModel, UserModel } from '~/resources/models';

export const useLoginHistoryList = (
  filter?: IPagination,
): {
  loginHistories: LoginHistoryModel[];
} => {
  const loginHistories = range(1, filter?.pageSize || 30).map(
    () =>
      new LoginHistoryModel({
        user: new UserModel({
          firstName: 'John',
          lastName: 'Doe',
        }),
        ipAddress: '127.0.0.1',
        loginAt: '2022-05-22T19:21:34.887Z',
        browser: 'Chrome',
        platform: 'Windows',
        devices: 'Webkit',
      }),
  );

  return {
    loginHistories,
  };
};
