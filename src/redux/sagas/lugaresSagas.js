import { takeLatest, call, put } from "redux-saga/effects";
import { GET_LOCATIONS_START, GET_LOCATIONS_SUCCESS, GET_LOCATIONS_ERROR } from "../../consts/actionTypes";

import { loadNamesApi } from '../api/search_countries';

export function* getLocations({ payload }) {
  try {

    const data = yield call(loadNamesApi, payload.query);
    yield put({ type: GET_LOCATIONS_SUCCESS, results: data });

  } catch (error) {

    yield put({ type: GET_LOCATIONS_ERROR, payload: error });
  }
}

export default function* lugares() {
  yield takeLatest(GET_LOCATIONS_START, getLocations);
}
