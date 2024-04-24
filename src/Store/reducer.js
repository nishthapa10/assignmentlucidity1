import ActionTypes from './types'

const initialState = {
    stats: [],
}

export const reducers = (state = initialState, action) => {
    switch (action?.type) {
        case ActionTypes.FETCH_DATA: {
            return {
                ...state,
            }
        }
        case ActionTypes.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                stats: action?.payload,
            }
        }
        default:
            return state
    }
}
