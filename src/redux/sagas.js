import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';

export function* incWorker() {
  yield put({ type: 'INCREMENT' });
}
export function* decWorker() {
      yield put({ type: 'DECREMENT' });
    }

export function* incWatcher() {
  yield takeEvery('INC_S', incWorker);
}

export function* decWatcher() {
    yield takeEvery('DEC_S', decWorker);
  }



export default function* rootSaga() {
  yield all([ decWatcher(), incWatcher()]);
}

