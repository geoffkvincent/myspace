import React from 'react'
import axios from 'axios'
import {PostsConsumer} from '../providers/PostsProvider'
import {Form} from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: '', body: '' }

  componentDidMount() {
    const { userId, postId, editing } = this.props
    if (editing) {
      axios.get(`/api/users/${userId}/posts/${postId}`)
        .then( res => this.setState({ ...res.data}))
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, body} = this.state
    const { post: { addPost, updatePost }, toggle, userId, postId, editing } = this.props
    if (editing) {
      const post = { title, body, userId, postId }
      updatePost(post)
      this.setState({ title: '', body: '' })
      toggle()
    } else {
      const post = { title, body, userId }
      addPost(post)
      this.setState({ title: '', body: '' })
      toggle()
    }
  }

  render() {
    const { title, body } = this.state
    const { editing } = this.props
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
        { editing ? 'Edit' : 'Submit' }
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