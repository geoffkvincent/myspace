import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'
import PostShow from './PostShow'
import {Link} from 'react-router-dom'

class Posts extends React.Component{

  componentDidMount() { 
    const { posts: { getPosts }, currentUserId } = this.props
    getPosts(currentUserId)
  }

  render() {
    const { posts: {posts}, toggleEdit, currentUserId } = this.props
    return(
      <Card.Group itemsPerRow={1}>
        {posts.map(post =>
        <Card key={post.id}>
          <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Meta>posted: {moment(post.created_at).format("MMM Do YYYY")}</Card.Meta>
            <Link to={{pathname: "/post", state: { post } }} >
              <Card.Meta>likes:{post.liked_posts.length}</Card.Meta>
            </Link>
            <PostShow post={post} userId={currentUserId} />
          </Card.Content>
          <Card.Content extra style={{display: 'flex', justifyContent: 'flex-end' }} >
            <Icon 
              onClick={ () => this.props.posts.deletePost({id: post.id, userId: post.user_id} )} 
              name='trash'
            />
            <Icon 
              onClick={() => toggleEdit(post.id) } 
              name='edit'
            />
            <Link to={}>
              <Card.Meta>Comments</Card.Meta>
            </Link>
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