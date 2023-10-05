import { AppDispatch } from "../";
import { getData } from "../../api/api";
import { HOTEL_ACTION_TYPES } from "./hotel.types";

export const fetchHotels = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getData();
      dispatch({
        type: HOTEL_ACTION_TYPES.SET_HOTEL,
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};
