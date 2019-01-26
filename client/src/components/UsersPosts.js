import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { PostsConsumer } from '../providers/PostsProvider'
import {Card, Header, Container, Icon} from 'semantic-ui-react'

class UsersPosts extends React.Component{
  state = { userPosts: [] }

  componentDidMount() {
    const { userId } = this.props.location.state
    axios.get(`/api/users/${userId}/posts`)
      .then(({data}) => this.setState({ userPosts: data }))
  }

  addLike = (postId) => {
    const { userId } = this.props.location.state
    const { updatePost } = this.props.posts
    const post = {postId, userId}
    updatePost(post)
  }

  render() {
    const {userPosts} = this.state
    const { userName } = this.props.location.state
    return(
      <Container>
        <Header as='h1' textAlign='center'>{userName} Posts</Header>
        <Card.Group itemsPerRow={3}>
          {userPosts.map(post =>
          <Card key={post.id}>
            <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <p>posted: {moment(post.created_at).format("MMM Do YYYY")}</p>
            </Card.Content>
            <Card.Content extra>
              <Icon onClick={() => this.addLike(post.id)} name='thumbs up'></Icon>
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