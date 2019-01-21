import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Header, Container, Image, Form, Button } from 'semantic-ui-react'
import moment from 'moment'

class Profile extends React.Component {
    state = { editing: false, formValues: { name: '', email: ''} }

    toggleEdit = () => {
      this.setState({ editing: !this.state.editing })
    }
    
    profileView = () => {
      const { auth: { user } } = this.props
      return (
        <>
          <Header as='h1' >Profile</Header>
          <Card centered>
            <Image></Image>
            <Card.Content>
              <Card.Header>{user.nickname}</Card.Header>
              <Card.Meta>{user.email}</Card.Meta>
              <Card.Meta>Member since: {moment(user.created_at).format("MMM Do YYYY")}</Card.Meta>
            </Card.Content>
          </Card>
        </>
      )
    }

    editView = () => {
      const { auth: { user } } = this.props
      const { formValues: { name, email } } = this.state
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Form>
      )
    }

    render() {
      const { auth: { user } } = this.props
      return (
        <Container>
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