import React from 'react'
import { AuthConsumer } from "../providers/AuthProvider"
import { Button, Form, Segment, Header} from 'semantic-ui-react'

class Login extends React.Component {
  state = { email: '', nickname: '', password: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {

  }

  render() {
    const { email, nickname, password } = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form>
          <Form.Input 
            label="Email"
            autofocus
            required
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input 
            label="User Name"
            autofocus
            required
            name='nickname'
            value={nickname}
            placeholder='User Name'
            onChange={this.handleChange}
            />
          <Form.Input 
            label="Password"
            autofocus
            required
            name='password'
            value={password}
            placeholder='Password'
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

export default Login