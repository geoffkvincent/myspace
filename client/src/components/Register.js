import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import {  Button, Form, Segment, Header} from 'semantic-ui-react'

class Register extends React.Component{
  state = { email: '', nickname: '', password: '', passwordConfirmation: ''}

  handleSubmit = (e) => {
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
    const { email, nickname, password } = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form>
          <Form.Input 
            label='email'
            name='email'
            value={email}
            placeholder='Email'
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label='nickname'
            name='nickname'
            value={nickname}
            placeholder='nickname'
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label='password'
            name='password'
            value={password}
            placeholder='password'
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
