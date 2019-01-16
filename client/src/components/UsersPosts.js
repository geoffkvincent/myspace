import React from 'react'
import axios from 'axios'
import {Card, Header, Container, Icon} from 'semantic-ui-react'

class UsersPosts extends React.Component{
  state = { userPosts: [] }

  componentDidMount() {
    const { userId } = this.props.location.state
    axios.get(`/api/users/${userId}/posts`)
      .then(({data}) => this.setState({ userPosts: data }))
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
            <p>{post.created_at}</p>
            </Card.Content>
            <Card.Content extra>
              <Icon name='thumbs up'></Icon>
            </Card.Content>
          </Card>
            )}  
        </Card.Group>
      </Container>
    )
  }
}

export default UsersPosts