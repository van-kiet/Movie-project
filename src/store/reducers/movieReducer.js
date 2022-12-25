const DEFAULT_STATE = {
  Name: "",
  NumberOfSeats: 0,
};
export const movieReducer = (state = DEFAULT_STATE, action) => {
  return { ...state };
};
