import React from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'

class PostShow extends React.Component{
  state = { post: {} }

  componentDidMount() {
    const {postId} = this.props
    axios.get(`/api/users/posts/${postId}`)
      .then( ({ data }) => this.setState({ post: data }) )
  }

  render() {
    const { post } = this.state
    return(
    <Card>
      <Card.Content>
      <p>{post.body}</p>
      </Card.Content>
    </Card>
    )
  }
}


export default PostShow