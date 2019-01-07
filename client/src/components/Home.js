import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'

const Home = () => (
    <Header as="h3" textAlign="center">Devise Auth App</Header>
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
