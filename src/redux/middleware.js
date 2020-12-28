import { CREATE_POST } from './types'
import { showAlert } from './actions'

const forbidden = ['fuck', 'ass', 'bitch']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const foundForbidden = forbidden.filter(word => action.payload.title.includes(word))
        if (foundForbidden.length) {
          return dispatch(showAlert(`Слова "${foundForbidden.join('", "')}" запрещены`))
        }
      }
      return next(action)
    }
  }
}
