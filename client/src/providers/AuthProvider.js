import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export class AuthProvider extends React.Component {
  state = { user: null }
}