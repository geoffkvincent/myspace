import React from 'react'
import {PostsConsumer} from '../providers/PostsProvider'
import {Form} from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: '', body: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, body} = this.state
    const { post: { addPost }, toggle, userId } = this.props
    const post = { title, body, userId }
    addPost(post)
    this.setState({ title: '', body: '' })
    toggle()
  }

  render() {
    const { title, body } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          placeholder="Title"
          label = "Title"
          value={title}
          onChange={this.handleChange}
        />
        <Form.TextArea
          name="body"
          placeholder="Post"
          label = "Post"
          value={body}
          onChange={this.handleChange}
        />
      <Form.Button>
        Submit
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