import { GET_LOCATIONS_START, GET_RESULTS } from "../../consts/actionTypes";

export const getLocationsActions = (payload) => ({
  type: GET_LOCATIONS_START,
  payload
});

export const actionResults = (payload) => ({
  type: GET_RESULTS,
  payload
});