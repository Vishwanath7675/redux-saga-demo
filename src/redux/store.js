import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga,{ incWatcher } from './sagas';
const sagaMiddleware = createSagaMiddleware()
var store = new createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;