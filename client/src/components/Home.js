import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'

const Home = ({auth}) => (
    <Header as="h1" textAlign="center">Welcome {auth.user.nickname}</Header>
)

export default class ConnectedHome extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => 
          <Home {...this.props} auth={auth}/>
        }
      </AuthConsumer>
    )
  }
}
