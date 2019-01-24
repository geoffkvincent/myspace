import React from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'

class PostShow extends React.Component{
  state = { post: {} }

  componentDidMount() {

  }

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