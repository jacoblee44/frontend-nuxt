import { range } from 'lodash';
import { NewsModel } from '~/resources/models';
import { NewsStatus } from '~/resources/enums';

export const useNewsList = () => {
  const news = range(1, 10).map(
    (i) =>
      new NewsModel({
        id: `${i}`,
        title: 'This is a title',
        type: 'News 2',
        date: '15/07/2021',
        status: i % 2 === 1 ? NewsStatus.Published : NewsStatus.Draft,
        active: i % 2 !== 1,
      }),
  );

  return {
    news,
  };
};
