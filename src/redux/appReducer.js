import { HIDE_LOADER, HIDE_ALERT, SHOW_LOADER, SHOW_ALERT } from './types'

const initialState = {
  loading: false,
  isWarningShow: false,
  warningMessage: '',
}
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    case SHOW_ALERT:
      return { ...state, isWarningShow: true, warningMessage: action.payload.message }
    case HIDE_ALERT:
      return { ...state, isWarningShow: false }
    default:
      return state
  }
}
