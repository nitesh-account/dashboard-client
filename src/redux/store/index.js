import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from '../reducers'
import RootSaga from '../sagas/RootSagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));    

sagaMiddleware.run(RootSaga)

export default store;