import React from 'React'
import {AuthConsumer} from '../providers/AuthProvider'

class Users extends React.Component{

  componentDidMount(){
    this.props.auth.getUsers()
  }

  render(){
    return(
      null
    )
  }
}

export default class ConnectedUsers extends React.Component{
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Users {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

