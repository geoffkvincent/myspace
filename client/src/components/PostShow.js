import React from 'react'
import {Card} from 'semantic-ui-react'

class PostShow extends React.Component {

  renderPost = () => {
    debugger
    return this.props.posts.map(post => {
      if(this.props.postId === post.id)
        return post.body
          return null
    })
  }
  
  render() {
    return (
      <Card>
        <Card.Content>
          <p>{this.renderPost()}</p>
        </Card.Content>
      </Card>
    )
  }
}

export default PostShow