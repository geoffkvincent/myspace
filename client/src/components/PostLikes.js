import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'
import moment from 'moment'

class PostLikes extends React.Component{
  render() {
    const { liked_posts } = this.props.location.state.post
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Created at</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          { liked_posts.map(like =>
          <div key={like.id}>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={like.image} rounded size='mini' />
                  <Header.Content>
                    {like.name}
                    <Header.Subheader>{like.nickname}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>Liked: {moment(like.created_at).format("MMM Do YYYY")}</Table.Cell>
            </Table.Row>
          </div>
          )}
        </Table.Body>
      </Table>
    )
  }
}

export default PostLikes