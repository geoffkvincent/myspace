import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'
import Posts from './Posts'
import PostForm from './PostForm'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {
  state = { showForm: false }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  renderForm = () => {
    const {showForm} = this.state
    const { user: { id } } = this.props.auth
    if (showForm)
      return (
        <PostForm 
          userId={id}
          toggle={this.toggleForm}
        />
      )
  }

  render() {
    const { user: { nickname, id } } = this.props.auth
    const {showForm} = this.state
    return(
      <>
        <Header as="h1" textAlign="center">
          Welcome {nickname}
        </Header>
        <Button onClick={this.toggleForm}>
          {showForm ? 'Cancel' : 'Create'}
        </Button>
        { this.renderForm() }
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
