import { HOTEL_ACTION_TYPES } from "./hotel.types";

const INITIAL_STATE = {
  hotel: null,
};

export const hotelReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case HOTEL_ACTION_TYPES.SET_HOTEL:
      return { ...state, hotel: payload };
    default:
      return state;
  }
};
