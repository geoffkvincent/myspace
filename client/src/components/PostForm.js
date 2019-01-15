import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import {Form} from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: '', body: '' }

  handleChange = () => {

  }

  handleSubmit = () => {

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input

        />
      <Form.Button>
        
      </Form.Button>
      </Form>
    )
  }

}

export default class ConnectedPostForm extends React.Component {
    render() {
      return(
        <PostsConsumer>
          { post =>
            <PostForm {...this.props} post={post} />
          }
        </PostsConsumer>
      )
    }
}