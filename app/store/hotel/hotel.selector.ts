export const getHotelState = (state: any) => {
  if (state.hotelReducer.hotel)
    return state?.hotelReducer.hotel.chosen_hotel.data.get_chosen_hotel;
};
