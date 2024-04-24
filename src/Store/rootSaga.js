import { all, call } from 'redux-saga/effects'
import { Sagas } from './sagas'

export default function* rootSaga() {
    yield all([call(Sagas)])
}
