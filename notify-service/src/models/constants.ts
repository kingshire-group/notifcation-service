import { IModelName } from "./types";
import { generateEnumArrayFromObject } from "./util";

// eslint-disable-next-line import/prefer-default-export
export const modelNames: IModelName = {
  USERS: "Users",
  ADMINSTRATOR: "Adminstrators",
  NOTIFICATIONS: "Notifications",
};

export const modelNamesEnum = generateEnumArrayFromObject(modelNames);
