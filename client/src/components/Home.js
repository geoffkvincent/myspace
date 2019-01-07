import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'

const Home = () => (
    <Header as="h3" textAlign="center">Devise Auth App</Header>
)

const ConnectedHome = () => (
  <AuthConsumer>
    { auth =>
      <Home {...this.props} auth={auth}/>
    }
  </AuthConsumer>
)

export default ConnectedHome;