import { GET_LOCATIONS_START } from "../../consts/actionTypes";

export const getLocationsActions = (payload) => ({
  type: GET_LOCATIONS_START,
  payload
});