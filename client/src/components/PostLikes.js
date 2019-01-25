import React from 'react'
import { Table } from 'semantic-ui-react'

class PostLikes extends React.Component{
  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Created at</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    )
  }
}

export default PostLikes