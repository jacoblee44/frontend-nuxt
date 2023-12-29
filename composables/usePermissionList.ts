import type { IPermission } from '~/resources/interfaces';

export const usePermissionList = () => {
  const permissions: IPermission[] = [
    {
      id: 1,
      name: 'Sites',
    },
    {
      id: 2,
      name: 'Site Branding',
    },
    {
      id: 3,
      name: 'Site Content',
    },
    {
      id: 4,
      name: 'Newsletter',
    },
    {
      id: 5,
      name: 'News',
    },
    {
      id: 6,
      name: 'Auctions',
    },
    {
      id: 7,
      name: 'Lots',
    },
    {
      id: 8,
      name: 'Products',
    },
    {
      id: 9,
      name: 'Product Settings',
    },
    {
      id: 10,
      name: 'Users',
    },
    {
      id: 11,
      name: 'User Roles & Permissions',
    },
    {
      id: 12,
      name: 'Translations',
      items: [
        {
          id: 14,
          name: 'Settings',
        },
      ],
    },
    {
      id: 13,
      name: 'Lorem Ipsum',
    },
  ];

  const extractPermissionIds = (data: IPermission[]) => {
    let ids: number[] = [];

    data.forEach((permission) => {
      ids.push(permission.id);

      if (permission.items) {
        ids = ids.concat(extractPermissionIds(permission.items));
      }
    });

    return ids;
  };

  return {
    permissions,
    extractPermissionIds,
  };
};
