import { takeLatest, put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { fetchData, fetchDataSuccess, fetchDataFailure } from './action'
import ActionTypes from './types'

export function* getData(action) {
    try {
        // const response = yield call(
        //     axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory'),
        // )

        const response = {
            data: [
                {
                    name: 'Bluetooth',
                    category: 'Electronic',
                    value: '$150',
                    quantity: 5,
                    price: '$30',
                },
                {
                    name: 'Edifier M43560',
                    category: 'Electronic',
                    value: '0',
                    quantity: 0,
                    price: '$0',
                },
                {
                    name: 'Sony 4k ultra 55 inch TV',
                    category: 'Electronic',
                    value: '$1190',
                    quantity: 17,
                    price: '$70',
                },
                {
                    name: 'Samsumg 55 inch TV',
                    category: 'Electronic',
                    value: '$600',
                    quantity: 50,
                    price: '$12',
                },
                {
                    name: 'samsumg S34 Ultra',
                    category: 'phone',
                    value: '$0',
                    quantity: 0,
                    price: '$0',
                },
            ],
        }
        console.log(response, 'rsp')
        if (response.data) {
            yield put(fetchDataSuccess(response.data))
        }
    } catch (e) {
        yield put(fetchDataFailure(e))
    }
}

export function* Sagas() {
    yield takeLatest(ActionTypes.FETCH_DATA, getData)
}
