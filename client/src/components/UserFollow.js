import React from 'react'
import {Button} from 'semantic-ui-react'

class UserFollow extends React.Component {
  state = { follow: false }

  toggleFollow = (userFollowed) => {
    const { user, addFriend } = this.props.auth
    this.setState({ follow: !this.state.follow})
    // const userFollow = {user_id: user.id, friends: id}
    addFriend(user, userFollowed)
  }

  render() {
    const { follow } = this.state
    return (
      <Button 
        onClick={() => this.toggleFollow(this.props.userFollowed)} 
        size='mini' 
        color='blue' 
      >
        { follow ? 'Unfollow' : 'Follow' }
      </Button>
    )
  }
} 

export default UserFollow
