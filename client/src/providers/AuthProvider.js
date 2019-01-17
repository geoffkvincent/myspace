import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export class AuthProvider extends React.Component {
  state = { user: null, users: []}

  getUsers = () => {
    axios.get('api/users')
      .then(res => this.setState({ users: res.data }))
  }

  addFriend = (user) => {
    debugger
    axios.put(`/api/users/${user.user_id}`, {friends: [user.friends]})
      .then( ({data}) => {
        const users = this.state.users.map( f => {
          if (f.id === user.user_id)
            return data
              return f
        })
        this.setState({ users })
      })

  }

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then ( res => {
        this.setState({ user: res.data.data })
        history.push("/")
      })
    .catch(res => {
      console.log(res)  
    })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
    .catch( res => {
      console.log(res)
    })
  }

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null })
        history.push('/login')
      })
      .catch(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <AuthContext.Provider value = {{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        getUsers: this.getUsers,
        addFriend: this.addFriend,
        setUser: (user) => this.setState({ user })
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}