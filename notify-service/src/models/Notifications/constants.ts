import { generateEnumArrayFromObject } from '../util';

export const notificationActionTypes = {
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
  READ: 'READ',
  DELETE: 'DELETE',
};

export const notificationActionTypesEnum = generateEnumArrayFromObject(
  notificationActionTypes
);
