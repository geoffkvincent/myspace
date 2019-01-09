import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'
import Posts from './Posts'

const Home = ({auth}) => (
    <Header as="h1" textAlign="center">Welcome {auth.user.nickname}</Header>
)

export default class ConnectedHome extends React.Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {auth => 
            <Home {...this.props} auth={auth}/>
          }
        </AuthConsumer>
        <Posts/>
      </div>
    )
  }
}
