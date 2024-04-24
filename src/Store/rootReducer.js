import { combineReducers } from 'redux'
import { reducers } from './reducer'

const rootReducer = combineReducers({
    stats: reducers,
})

export default rootReducer
