import createSagaMiddleware from "redux-saga";
import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";
import { createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
