import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Header, Container, Image } from 'semantic-ui-react'

class Profile extends React.Component {
    render() {
      const { auth: { user } } = this.props
      return (
        <Container>
          <Header as='h1' >Profile</Header>
          <Card centered>
            <Image></Image>
            <Card.Content>
              <Card.Header>{user.nickname}</Card.Header>
              <Card.Meta>{user.email}</Card.Meta>
            </Card.Content>
          </Card>
        </Container>
      )
    }
}

export default class ConnectedProfile extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {auth =>
            <Profile {...this.props} auth={auth}/>
          }
        </AuthConsumer>
      )
    }
}