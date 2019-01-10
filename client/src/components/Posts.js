import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import { Card } from 'semantic-ui-react'

class Posts extends React.Component{

  componentDidMount() { 
    this.props.posts.getPosts()
  }

  render() {
    const {posts: {posts}} = this.props
    return(
      <div>
        <ul>
          {posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
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