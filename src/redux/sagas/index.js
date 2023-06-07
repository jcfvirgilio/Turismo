import { all } from 'redux-saga/effects';
import lugaresSagas from './lugaresSagas';

export default function* rootSaga() {
  yield all([lugaresSagas()]);
}