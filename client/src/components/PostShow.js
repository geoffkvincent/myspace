import React from 'react'
import {Card} from 'semantic-ui-react'

class PostShow extends React.Component{
  state = { post: {} }

  

  render() {
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