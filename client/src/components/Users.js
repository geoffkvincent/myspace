import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Button, Image } from 'semantic-ui-react'
import moment from 'moment'
import { Link, } from 'react-router-dom'

class Users extends React.Component{
  state = { follow: true }

  componentDidMount(){
    this.props.auth.getUsers()
  }

  toggleFollow = (id) => {
    const { user, addFriend } = this.props.auth
    this.setState({ follow: !this.state.follow})
    const userFollow = {user_id: user.id, friends: id}
    addFriend(userFollow)
  }

  render(){
    const { follow } = this.state
    const { auth:{ users, user }} = this.props
    return(
      <Card.Group itemsPerRow={3}>
        {users.map(u =>
        <Card key={u.id}>
          <Image src={user.image}/>
          <Card.Content>
            <Link to={{ 
              pathname: `/users/${u.id}/posts`, 
              state: {userId: u.id, userName: u.nickname, user}
            }}>
              <Card.Header>{u.nickname}</Card.Header>
            </Link>
          <Card.Meta>{u.email}</Card.Meta>
          <Card.Meta>Member since: {moment(u.created_at).format("MMM Do YYYY")}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button 
              onClick={() => this.toggleFollow(u.id)} 
              size='mini' 
              color='blue' 
            >
              { follow ? 'Follow' : 'Unfollow' }
            </Button>
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

// const FollowButton = styled.div`
//   background-color: { follow ? blue : red } !important;
// `

