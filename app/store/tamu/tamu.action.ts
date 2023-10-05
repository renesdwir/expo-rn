import { UserType } from "./tamu.reducer";
import { TAMU_ACTION_TYPES } from "./tamu.types";
const createAction = (type: any, payload?: any) => ({ type, payload });

export const addTamu = (tamu: UserType[]) => {
  const newData = tamu.filter((data: any) => data.name !== "");
  return createAction(TAMU_ACTION_TYPES.SET_TAMU, newData);
};
