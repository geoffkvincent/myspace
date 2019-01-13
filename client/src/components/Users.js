import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card } from 'semantic-ui-react'

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
          <Card.Header>{user.title}</Card.Header>
          <p>{user.created_at}</p>
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

