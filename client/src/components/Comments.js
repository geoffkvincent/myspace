import React from 'react'
import { PostsConsumer } from '../providers/PostsProvider'

class Comments extends React.Component {

  componentDidMount(){
    const { posts: { getComments }, location: { state: { userId, postId } } } = this.props
    getComments(userId, postId)
  }

  render() {
    const { comments } = this.props.posts
    return (
      <ul>
        {comments.map(c =>
          <li key={c.id}>{c.text}</li>
        )}
      </ul>
    )
  }
}

export default class ConnectedComments extends React.Component {
  render() {
    return(
      <PostsConsumer>
        {posts =>
          <Comments {...this.props} posts={posts}/>
        }
      </PostsConsumer>
    )
  }
}