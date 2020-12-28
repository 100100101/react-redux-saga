import React from 'react'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'
import { useSelector } from 'react-redux'
import { Alert } from './components/Alert'

function App() {
  const isWarningShow = useSelector(state => state.app.isWarningShow)
  const warningMessage = useSelector(state => state.app.warningMessage)
  return (
    <div className="container pt-3">
      {isWarningShow && <Alert message={warningMessage} />}
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}

export default App
