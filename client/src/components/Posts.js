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
          <Card.Content extra style={{display: 'flex', justifyContent: 'flex-end' }} >
            <Icon onClick={() => this.props.posts.deletePost({id: post.id, userId: post.user_id} ) } name='trash'/>
            <Icon name='edit'/>
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