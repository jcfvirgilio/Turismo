import { all } from 'redux-saga/effects';
import lugares from './lugaresSagas';

export default function* rootSaga() {
  yield all([lugares()]);
}