import React from 'react'
import { Card, Button } from 'semantic-ui-react'

class PostShow extends React.Component{
  state = { showPost: false }

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