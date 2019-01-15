import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'
import Posts from './Posts'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {
  state = {showForm: false}

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  render() {
    const { user: { nickname, id } } = this.props.auth
    return(
      <>
        <Header as="h1" textAlign="center">
          Welcome {nickname}
        </Header>
        <Button onClick={this.toggleForm}>Create Post</Button>
        <Posts currentUserId={id}/>
      </>
    )
  }
}

export default class ConnectedHome extends React.Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {auth => 
            <Home {...this.props} auth={auth}/>
          }
        </AuthConsumer>
      </div>
    )
  }
}
