import React from 'react'
import {Card} from 'semantic-ui-react'

const PostShow = ({post}) => (
  <Card>
    <Card.Content>
      <p>{post.body}</p>
    </Card.Content>
  </Card>
)

export default PostShow