import React from 'react'
import {PostsConsumer} from '../providers/PostsConsumer'

class Posts extends React.Component{

}

export default class ConnectedPosts extends React.Component{
  render() {
    return(
      <PostsConsumer>
        {posts =>
          <Posts {...this.props} posts={posts}/>
        }
      </PostsConsumer>
    )
  }
}