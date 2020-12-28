import React from 'react'
import './index.css'
export default function Index() {
  return (
    <div className="loaderWrapper">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
