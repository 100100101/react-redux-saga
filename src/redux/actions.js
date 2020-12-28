import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, HIDE_ALERT, SHOW_LOADER, SHOW_ALERT, REQUEST_POSTS } from './types'

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showAlert(message) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
      },
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  }
}
