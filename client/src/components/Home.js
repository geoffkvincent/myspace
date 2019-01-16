import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'
import Posts from './Posts'
import PostForm from './PostForm'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {
  state = { showForm: false, postId: null }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  toggleEdit = (id) => {
    this.setState({ showForm: !this.state.showForm, postId: id})
  }

  renderForm = () => {
    const { showForm, postId } = this.state
    const { user: { id } } = this.props.auth
    if (showForm)
      return (
        <PostForm 
          userId={id}
          toggle={this.toggleForm}
        />
      )
    }

  // editForm = (id) => {
  //   const { showForm } = this.state
  //   this.setState({showForm: !showForm})
  //   const { user } = this.props.auth
  //   if (showForm)
  //   return (
  //     <PostForm 
  //       userId={user.id}
  //       postId={id}
  //     />
  //   )
  // }

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
        <Posts currentUserId={id} toggleForm={this.toggleForm} toggleEdit={this.toggleEdit}  />
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
