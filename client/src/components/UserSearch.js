import React from 'react'
import { Form } from 'semantic-ui-react'

class UserSearch extends React.Component {
  state = { search: '' }

  render() {
    const { search } = this.state
    return (
      <Form>
        <Form.Input 
          name="search"
          placeholder="Search"
          label = "Search"
          value={search}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default UserSearch