import React from 'react'
import {Button} from 'semantic-ui-react'

class UserFollow extends React.Component {
  state = { follow: false }

  toggleFollow = (id) => {
    const { user, addFriend } = this.props.auth
    this.setState({ follow: !this.state.follow})
    const userFollow = {user_id: user.id, friends: id}
    addFriend(userFollow)
  }

  render() {
    const { follow } = this.state
    return (
      <Button 
        onClick={() => this.toggleFollow(this.props.userId)} 
        size='mini' 
        color='blue' 
      >
        { follow ? 'Follow' : 'Unfollow' }
      </Button>
    )
  }
} 

export default UserFollow
