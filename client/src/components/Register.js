import React from 'react'
import { AuthProvider } from '../providers/AuthProvider'
import {  Button, Form, Segment, Header} from 'semantic-ui-react'

class Register extends React.Component{
  state = { email: '', nickname: '', password: '', passwordConfirmation: ''}

  handleSubmit = () => {

  }

  handleChange = () => {

  }

  render() {
    const { email, nickname, password, passwordConfirmation} = this.state
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
