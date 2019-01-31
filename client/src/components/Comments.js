import React from 'react'
import { PostsConsumer } from '../providers/PostsProvider'

class Comments extends React.Component {

  componentDidMount(){
    const { posts: { getComments }, userId, postId } = this.props
    getComments(userId, postId)
  }

  render() {
    return (
      <div></div>
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