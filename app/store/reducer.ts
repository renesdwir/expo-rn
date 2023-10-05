import { combineReducers } from "redux";
import { tamuReducer } from "./tamu/tamu.reducer";
import { hotelReducer } from "./hotel/hotel.reducer";
export const rootReducer = combineReducers({ tamuReducer, hotelReducer });
