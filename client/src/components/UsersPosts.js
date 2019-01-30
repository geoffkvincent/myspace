import React from 'react'
import axios from 'axios'
import moment from 'moment'
import PostShow from './PostShow'
import { PostsConsumer } from '../providers/PostsProvider'
import {Card, Header, Container, Icon} from 'semantic-ui-react'

class UsersPosts extends React.Component{
  state = { userPosts: [] }

  componentDidMount() {
    const { userId } = this.props.location.state
    axios.get(`/api/users/${userId}/posts`)
      .then(({data}) => this.setState({ userPosts: data }))
  }

  addLikedPost = (postId) => {
    const { userId, user } = this.props.location.state
    const { addLike } = this.props.posts
    const post = {postId, userId}
    addLike(post, user)
  }

  render() {
    const {userPosts} = this.state
    const { userName } = this.props.location.state
    return(
      <Container>
        <Header as='h1' textAlign='center'>{userName} Posts</Header>
        <Card.Group itemsPerRow={1}>
          {userPosts.map(post =>
          <Card key={post.id}>
            <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <p>posted: {moment(post.created_at).format("MMM Do YYYY")}</p>
            <PostShow post={post}/>
            </Card.Content>
            <Card.Content extra style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Icon onClick={() => this.addLikedPost(post.id)} name='thumbs up'></Icon>
              <Card.Meta>{post.liked_posts.length}</Card.Meta>
            </Card.Content>
          </Card>
            )}  
        </Card.Group>
      </Container>
    )
  }
}

export default class ConnectedUsersPosts extends React.Component{
  render() {
    return (
      <PostsConsumer>
        { posts => 
          <UsersPosts {...this.props} posts={posts} />
        }
      </PostsConsumer>
    )
  }
}