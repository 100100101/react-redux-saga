import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import Loader from './Loader'
import { fetchPosts } from '../redux/actions'
// eslint-disable-next-line
export default () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const isAppLoading = useSelector(state => state.app.loading)

  if (isAppLoading) {
    return <Loader />
  }
  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
        Загрузить
      </button>
    )
  }
  return posts.map(post => {
    return <Post post={post} key={post.id} />
  })
}
