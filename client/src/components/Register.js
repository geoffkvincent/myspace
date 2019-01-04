import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import {  Button, Form, Segment, Header} from 'semantic-ui-react'

class Register extends React.Component{
  state = { email: '', nickname: '', password: '', passwordConfirmation: ''}

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    const { email, nickname, password, passwordConfirmation } = this.state
    const { auth: { handleRegister }, history } = this.props

    if (password === passwordConfirmation) 
      handleRegister({ email, nickname, password }, history)
    else 
      alert('Passwords Dont Match')
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, nickname, password, passwordConfirmation } = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label='Email'
            name='email'
            value={email}
            placeholder='Email'
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label='User Name'
            name='nickname'
            value={nickname}
            placeholder='User Name'
            onChange={this.handleChange}
          />
          <Form.Input 
            label='Password'
            name='password'
            value={password}
            placeholder='Password'
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label='Password Confirmation'
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            required
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

  export default class ConnectedRegister extends React.Component {
    render() {
      return (
        <AuthConsumer>
          { auth =>
            <Register {...this.props} auth={auth} />
          }
        </AuthConsumer>
      )
    }
  }
