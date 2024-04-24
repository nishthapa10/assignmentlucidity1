import ActionTypes from './types'

export function fetchData(payload) {
    return {
        type: ActionTypes.FETCH_DATA,
        payload,
    }
}

export function fetchDataSuccess(payload) {
    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        payload,
    }
}

export function fetchDataFailure(payload) {
    return {
        type: ActionTypes.FETCH_DATA_FAILURE,
        payload,
    }
}
