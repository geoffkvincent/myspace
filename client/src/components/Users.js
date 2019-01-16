import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Button } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

class Users extends React.Component{

  componentDidMount(){
    this.props.auth.getUsers()
  }

  render(){
    const { auth:{ users }} = this.props
    return(
      <Card.Group itemsPerRow={3}>
        {users.map(user =>
        <Card key={user.id}>
          <Card.Content>
            <Link to={{ 
              pathname: '/users/posts', 
              state: {userId: user.id, userName: user.nickname}
            }}>
              <Card.Header>{user.nickname}</Card.Header>
            </Link>
          <Card.Meta>{user.email}</Card.Meta>
          <Card.Meta>Member since: {user.created_at}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button size='mini' color='blue' >Follow</Button>
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

