import React from 'react'
import {AuthConsumer} from '../providers/AuthProvider'

class Profile extends React.Component {
    render() {
      return (
        null
      )
    }
}

export default class ConnectedProfile extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {auth =>
            <Profile {...this.props} auth={auth}/>
          }
        </AuthConsumer>
      )
    }
}