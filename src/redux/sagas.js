import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_POSTS, REQUEST_POSTS } from './types'
import { hideLoader, showAlert, showLoader } from './actions'
export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}
function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    if (!payload) {
      throw new Error('Что-по пошло не так')
    }
    yield put({
      type: FETCH_POSTS,
      payload,
    })
    yield put(hideLoader())
  } catch (error) {
    yield put(showAlert(error.message))
    yield put(hideLoader())
  }
}
async function fetchPosts() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (response.status !== 200) {
      return
    }
    return await response.json()
  } catch (error) {}
}
