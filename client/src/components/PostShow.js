import React from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'

class PostShow extends React.Component{
  state = { showPost: false }

  // componentDidMount() {
  //   const {postId} = this.props
  //   axios.get(`/api/users/posts/${postId}`)
  //     .then( ({ data }) => this.setState({ post: data }) )
  // }

  toggleShow = () => this.setState({ showPost: !this.state.showPost })

  render() {
    const { post } = this.props
    const { showPost } = this.state
    return(
    <Card>
      <Card.Content>
      <button onClick={this.toggleShow}>Click</button>
      <p>{ showPost ? post.body : "" }</p>
      </Card.Content>
    </Card>
    )
  }
}


export default PostShow