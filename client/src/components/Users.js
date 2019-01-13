import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card }

class Users extends React.Component{

  componentDidMount(){
    this.props.auth.getUsers()
  }

  render(){
    return(
      <Card.Group itemsPerRow={3}>
        {posts.map(post =>
        <Card key={post.id}>
          <Card.Content>
          <Card.Header>{post.title}</Card.Header>
          <p>{post.created_at}</p>
          </Card.Content>
        </Card>
          )}  
      </Card.Group>
    )
  }
}

export default class ConnectedUsers extends React.Component{
  render() {
    return(
      <AuthConsumer>
        {auth =>
          <Users {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

