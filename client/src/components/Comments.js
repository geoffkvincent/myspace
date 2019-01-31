import React from 'react'
import { PostsConsumer } from '../providers/PostsProvider'

class Comments extends React.Component {
  render() {
    return (
      null
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