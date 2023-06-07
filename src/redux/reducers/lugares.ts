import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  GET_RESULTS,
  GET_RESULTS_ERROR,
  GET_RESULTS_SUCCESS,
} from '../../consts/actionTypes';

export default function (state, action) {
  switch (action.type) {
    case GET_LOCATIONS_START:
      return { ...state };
      break;
    case GET_LOCATIONS_SUCCESS:
      return { ...state, places: action };
      break;
    case GET_LOCATIONS_ERROR:
      return { ...state, places: null, error: action.error };
      break;
    case GET_RESULTS:
      return { ...state, resultsIA: null };
      break;
    case GET_RESULTS_SUCCESS:
      return { ...state, resultsIA: action.resultsIA };
      break;
    case GET_RESULTS_ERROR:
      return { ...state, resultsIA: null, error: action.error };
      break;
    default:
      return { ...state };
  }
}
