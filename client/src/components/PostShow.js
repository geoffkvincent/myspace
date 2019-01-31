import React from 'react'
import Comments from './Comments'
import axios from 'axios'
import { Button } from 'semantic-ui-react'

class PostShow extends React.Component{
  state = { showPost: false }

  renderComments = () => {
    const {userId, post, getComments} = this.props
    getComments(userId, post.id)
  }

  toggleShow = () => this.setState({ showPost: !this.state.showPost })

  render() {
    const { post } = this.props
    const { showPost } = this.state
    return(
      <div>
        <Button size='mini' onClick={this.toggleShow}>Show Post</Button>
        <p>{ showPost ? post.body : "" }</p>
      </div>
    )
  }
}


export default PostShow