import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'

class Posts extends React.Component{
  state = { showPost: false, postId: id }

  componentDidMount() { 
    this.props.posts.getPosts(this.props.currentUserId)
  }

  showPost = (id) => {
    this.setState({ showPost: !this.state.showPost, postId: id})
    
  }
  

  renderPost = (post) => {
    if (this.state.showPost)
    return (
      <p>{post}</p>
    )
  }

  render() {
    const {posts: {posts}, toggleEdit } = this.props
    return(
      <Card.Group itemsPerRow={3}>
        {posts.map(post =>
        <Card key={post.id}>
          <Card.Content>
          <Card.Header onClick={() => this.showPost(post.id)}>{post.title}</Card.Header>
          <p>posted: {moment(post.created_at).format("MMM Do YYYY")}</p>
          { this.state.showPost ? this.renderPost(post) : null }
          </Card.Content>
          <Card.Content extra style={{display: 'flex', justifyContent: 'flex-end' }} >
            <Icon onClick={() => this.props.posts.deletePost({id: post.id, userId: post.user_id} ) } name='trash'/>
            <Icon onClick={() => toggleEdit(post.id) } name='edit'/>
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