import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Container, Image, Form } from 'semantic-ui-react'
import moment from 'moment'
import UserFollow from './UserFollow'
import { Link, } from 'react-router-dom'
import UserSearch from './UserSearch'

class Users extends React.Component{
  state = { search: '' }

  componentDidMount(){
    this.props.auth.getUsers()
  }

  render(){
    const { auth:{ users, user }} = this.props
    const { search } = this.state
    return(
      <Container>
        <UserSearch />
        <Form>
          <Form.Input 
            name="search"
            placeholder="Search"
            label = "Search"
            value={search}
            onChange={this.handleChange}
          />
        </Form>
        <Card.Group itemsPerRow={3}>
          {users.map(u =>
          <Card key={u.id}>
            <Image src={u.image}/>
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
              <UserFollow auth={ this.props.auth } userFollowed={u}/>
            </Card.Content>
          </Card>
            )}  
        </Card.Group>
      </Container>
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

