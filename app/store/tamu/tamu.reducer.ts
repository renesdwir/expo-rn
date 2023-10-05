import { TAMU_ACTION_TYPES } from "./tamu.types";
export type UserType = {
  id: string;
  salutation: string;
  name: string;
};
const defaultUser = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd92aa97f63",
    salutation: "Mr.",
    name: "Jhon Doe",
  },
];
const INITIAL_STATE = {
  tamu: defaultUser,
};

export const tamuReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case TAMU_ACTION_TYPES.SET_TAMU:
      return { ...state, tamu: payload };
    default:
      return state;
  }
};
