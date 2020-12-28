import React from 'react'
// eslint-disable-next-line
export default ({ post }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  )
}
