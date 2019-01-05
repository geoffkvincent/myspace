import React from 'react';
import { Header, } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'

const Home = ({auth}) => (
  <AuthConsumer>
    <Header as="h3" textAlign="center">Devise Auth App</Header>
  </AuthConsumer>
)

export default Home;