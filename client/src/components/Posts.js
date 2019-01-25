import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import { Card, Icon, Button } from 'semantic-ui-react'
import moment from 'moment'
import PostShow from './PostShow'

class Posts extends React.Component{
  state = { showPost: false }

  componentDidMount() { 
    this.props.posts.getPosts(this.props.currentUserId)
  }

  showPost = (id) => {
    this.setState({ showPost: !this.state.showPost})
    return (
      <PostShow postId={id}/>
    )
  }
  
  render() {
    const {posts: {posts}, toggleEdit } = this.props
    return(
      <Card.Group itemsPerRow={3}>
        {posts.map(post =>
        <Card key={post.id}>
          <Card.Content>
          <Card.Header>{post.title}</Card.Header>
          <p>posted: {moment(post.created_at).format("MMM Do YYYY")}</p>
          <PostShow post={post}/>
          </Card.Content>
          <Card.Content extra style={{display: 'flex'}} >
            <div style={{justifyContent: 'flex-end'}}>
              <Icon onClick={() => this.props.posts.deletePost({id: post.id, userId: post.user_id} ) } name='trash'/>
              <Icon onClick={() => toggleEdit(post.id) } name='edit'/>
            </div>
            <div style={{ justifyContent: "flex-start"}}>
              <p >likes: {}</p>
            </div>
          </Card.Content>
        </Card>
          )}  
      </Card.Group>
    )
  }
}

export default class ConnectedPosts extends React.Component {
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