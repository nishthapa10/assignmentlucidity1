import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { promiseMiddleware } from '@adobe/redux-saga-promise'
import rootReducer from './rootReducer'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [promiseMiddleware, sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)

export default store
