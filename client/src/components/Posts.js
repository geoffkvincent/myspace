import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import { Card, Icon } from 'semantic-ui-react'

class Posts extends React.Component{

  componentDidMount() { 
    this.props.posts.getPosts(this.props.currentUserId)
  }

  render() {
    const {posts: {posts}} = this.props
    return(
      <Card.Group itemsPerRow={3}>
        {posts.map(post =>
        <Card key={post.id}>
          <Card.Content>
          <Card.Header>{post.title}</Card.Header>
          <p>{post.created_at}</p>
          </Card.Content>
          <Card.Content extra>
            <Icon fitted name='trash'/>
            <Icon fitted name='edit'/>
          </Card.Content>
        </Card>
          )}  
      </Card.Group>
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