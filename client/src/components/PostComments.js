import React from 'react'
import { PostsConsumer } from '../providers/PostsProvider'
import {Comment} from 'semantic-ui-react'

class PostComments extends React.Component {

  componentDidMount(){
    const { posts: { getComments }, location: { state: { userId, postId } } } = this.props
    getComments(userId, postId)
  }

  render() {
    const {comments} = this.props.posts
    return (
      <Comment.Group>
        {comments.map( c =>
        <Comment key={c.id}>
          <Comment.Content>
          {/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{c.text}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>  
        </Comment>
      )}
      </Comment.Group>
    )
  }
}

export default class ConnectedComments extends React.Component {
  render() {
    return(
      <PostsConsumer>
        {posts =>
          <PostComments {...this.props} posts={posts}/>
        }
      </PostsConsumer>
    )
  }
}