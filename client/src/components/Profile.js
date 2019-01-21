import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Header, Container, Image, Form, Button, Grid } from 'semantic-ui-react'
import moment from 'moment'

class Profile extends React.Component {
    state = { editing: false, formValues: { name: '', nickname: '', email: ''} }

    componentDidMount() {
      const { auth: { user: {name, nickname, email} } } = this.props
      this.setState({ formValues: { name, nickname, email } })
    }

    toggleEdit = () => {
      this.setState({ editing: !this.state.editing })
    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
      e.preventDefault()
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
      const { formValues: { name, email, nickname } } = this.state
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
            label="User Name"
            name="nickname"
            value={nickname}
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
      const { editing } = this.state
      return (
        <Container>
          <Grid>
            <Grid.Row>
              { editing ? this.editView() : this.profileView() }
              <Grid.Column>
                <Button onClick={ this.toggleEdit }>{editing ? 'Cancel' : 'Edit'}</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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