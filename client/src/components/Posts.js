import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'

class Posts extends React.Component{

  componentDidMount() { 
    this.props.posts.getPosts()
  }

  render() {
    return(
      null
    )
  }
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