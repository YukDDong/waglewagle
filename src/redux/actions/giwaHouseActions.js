// export const MAKE_GIWAHOUSE = "MAKE_GIWAHOUSE";
export const CHANGE_GIWA_HOUSE = "CHANGE_GIWA_HOUSE";
export const GET_GIWA_HOUSE = "GET_GIWA_HOUSE";

export const changeGiwaHouseStyle = (style) => ({
  type: CHANGE_GIWA_HOUSE,
  payload: style,
});

export const getGiwaHouse = (payload) => ({
  type: GET_GIWA_HOUSE,
  payload: payload,
});
