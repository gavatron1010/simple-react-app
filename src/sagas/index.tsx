import { take, put, call, fork } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from '../actions'

export function fetchUserApi() {
  var timeout = new Promise(resolve => setTimeout(resolve, 1000));
  return timeout.then(()=>{
    return fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
      return json.results.pop()
    })
  })
}

export function* fetchUser() {
  while(true) {
    yield take(actions.GET_USER)
    const user = yield call(fetchUserApi)
    yield put(actions.receiveUser(user))
  }
}

export function* startup() {
  const user = yield call(fetchUserApi)
  yield put(actions.receiveUser(user))
}

export default function* root() {
  yield fork(startup)
  yield fork(fetchUser)
}
