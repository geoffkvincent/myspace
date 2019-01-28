import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'

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
          <Table.Row key={like.id}>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={like.image} rounded size='mini' />
                <Header.Content>
                  
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
    )
  }
}

export default PostLikes