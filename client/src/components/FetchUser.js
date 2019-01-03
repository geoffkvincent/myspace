import React from 'react'
import axios from 'axios'
import { AuthConsumer } from "../providers/AuthProvider"

class FetchUser extends React.Component{
  state = { loaded: false }

  componentDidMount() {

  }
}

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { auth =>
      <FetchUser {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedFetchUser