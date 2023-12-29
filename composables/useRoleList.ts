import { v4 as uuidv4 } from 'uuid';
import { RoleModel } from '~/resources/models';

const data = [
  {
    id: uuidv4(),
    name: 'Super Admin',
    assignedCount: 2,
  },
  {
    id: uuidv4(),
    name: 'Admin',
    assignedCount: 7,
  },
  {
    id: uuidv4(),
    name: 'Site Owner',
    assignedCount: 15,
  },
  {
    id: uuidv4(),
    name: 'Site Admin',
    assignedCount: 21,
  },
  {
    id: uuidv4(),
    name: 'Breeder',
    assignedCount: 75,
  },
  {
    id: uuidv4(),
    name: 'Horse Owner',
    assignedCount: 34,
  },
  {
    id: uuidv4(),
    name: 'Horse Agent',
    assignedCount: 36,
  },
  {
    id: uuidv4(),
    name: 'Marketplace User',
    assignedCount: 2554,
  },
  {
    id: uuidv4(),
    name: 'Site User',
    assignedCount: 5485,
  },
];

export const useRoleList = () => {
  const roles = data.map((item) => new RoleModel(item));

  return {
    roles,
  };
};
