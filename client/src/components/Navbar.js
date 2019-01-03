import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props
  }
}