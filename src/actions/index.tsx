export const GET_USER = 'GET_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_PROFILE = 'SET_PROFILE'

export function getUser() {
  return {
    type: GET_USER
  }
}

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user,
  }
}

export function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile,
  }
}
