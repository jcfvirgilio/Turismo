import { takeLatest, call, put } from "redux-saga/effects";
import { OpenAI } from '../../redux/api/openAI';
import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  GET_RESULTS,
  GET_RESULTS_ERROR,
  GET_RESULTS_SUCCESS
} from "../../consts/actionTypes";

import { loadNamesApi } from '../api/search_countries';

export function* getLocations({ payload }) {
  try {

    const data = yield call(loadNamesApi, payload.query);
    yield put({ type: GET_LOCATIONS_SUCCESS, results: data });

  } catch (error) {

    yield put({ type: GET_LOCATIONS_ERROR, payload: error });
  }
}

export function* sagaResults({ payload }) {
  try {
    const response = yield call(OpenAI, payload);
    console.log('respuesta del openAI', response);
    if (!response) {
      yield put({ type: GET_RESULTS_ERROR, resultsIA: 'NO HAY RESULTADOS' });
    }
    yield put({ type: GET_RESULTS_SUCCESS, resultsIA: response });

  } catch (error) {
    console.log('SAGA RESULTS::::::::::: ', error.message);
    yield put({ type: GET_RESULTS_ERROR, error });

  }
}

export default function* lugaresSagas() {
  yield takeLatest(GET_LOCATIONS_START, getLocations);
  yield takeLatest(GET_RESULTS, sagaResults);
}
