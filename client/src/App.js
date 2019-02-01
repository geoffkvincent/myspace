import React, { Fragment } from 'react'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Users from './components/Users'
import UsersPosts from './components/UsersPosts'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import Profile from './components/Profile'
import PostLikes from './components/PostLikes'
import Comments from './components/Comments'
import ProtectedRoute from './components/ProtectedRoute'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/users' component={Users} />
          <ProtectedRoute exact path='/users/:id/posts' component={UsersPosts} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/post' component={PostLikes} />
          <ProtectedRoute exact path='/comments' component={Comments} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App