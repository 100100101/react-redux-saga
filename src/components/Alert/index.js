import React from 'react'
import { useDispatch } from 'react-redux'
import { hideAlert } from '../../redux/actions'
export const Alert = ({ message }) => {
  const dispatch = useDispatch()
  return (
    <div className="alert alert-warning" role="alert" onClick={() => dispatch(hideAlert())}>
      {message}
    </div>
  )
}
