import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout }, location: { pathname }, history } = this.props

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item 
            name='logout'
            onClick={ () => handleLogout(history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item 
              id='login'
              name='login'
              active={pathname === '/login'}
            />
          </Link>
          <Link to='register'>
            <Menu.Item 
              id='register'
              name='register'
              active={pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              id='home'
              name='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/users'>
            <Menu.Item
              id='users'
              name='users'
              active={this.props.location.pathname === '/users'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar { ...this.props } auth ={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar)