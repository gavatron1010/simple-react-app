import { combineReducers } from 'redux'
import { GET_USER, RECEIVE_USER, SET_PROFILE } from '../actions'

function users(state = {users: []}, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, isFetching: true }
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        users: state.users.concat(action.user)
      }
    default:
      return state
  }
}

function profile(state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...action.profile
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users,
  profile,
})

export default rootReducer
