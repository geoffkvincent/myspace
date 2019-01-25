import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'
import { Card, Header, Container, Image, Form, Button, Grid } from 'semantic-ui-react'
import moment from 'moment'
import Dropzone from 'react-dropzone'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
const file = ''

class Profile extends React.Component {
    state = { editing: false, formValues: { name: '', nickname: '', email: '', file: '' } }

    componentDidMount() {
      const { auth: { user: {name, nickname, email} } } = this.props
      this.setState({ formValues: { name, nickname, email, file } })
    }

    toggleEdit = () => {
      this.setState({ editing: !this.state.editing })
    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ 
        formValues: {
          ...this.state.formValues,
          [name]: value 
        }
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const { formValues: { name, nickname, email, file } } = this.state
      const { auth: { user, updateUser } } = this.props
      updateUser(user.id, { name, nickname, email, file }, this.props.history)
      this.setState({
        editing: false,
        formValues: {
          ...this.state.formValues,
          file: '',
        }
      })
    }
    
    profileView = () => {
      const { auth: { user } } = this.props
      return (
        <>
          <Header as='h1' >Profile</Header>
          <Card centered>
            <Image src={ user.image || defaultImage }/>
            <Card.Content>
              <Card.Header>{user.nickname}</Card.Header>
              <Card.Meta>{user.name}</Card.Meta>
              <Card.Meta>{user.email}</Card.Meta>
              <Card.Meta>Member since: {moment(user.created_at).format("MMM Do YYYY")}</Card.Meta>
            </Card.Content>
          </Card>
        </>
      )
    }

    onDrop = (files) => {
      this.setState({ formValues: {...this.formValues, file: files[0] } })
    }

    editView = () => {
      const { auth: { user } } = this.props
      const { formValues: { name, email, nickname, file } } = this.state
      return (
        <Form onSubmit={this.handleSubmit}>
          <Dropzone 
            onDrop={this.onDrop}
            multiple={false}
          >
            {({getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p>
                    :
                      <p>Try dropping some files here, or click to select files to upload</p>
                  }
                </div>
              )
            }}
          </Dropzone>
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

const styles = {
  dropzone: {
    height: "300px",
  }
}