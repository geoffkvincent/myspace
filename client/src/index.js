import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./providers/AuthProvider"
import {PostsProvider} from "./providers/PostsProvider"
import { initMiddleware } from 'devise-axios'
import 'semantic-ui-css/semantic.min.css'

initMiddleware()

ReactDOM.render(
  <AuthProvider>
    <PostsProvider>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </PostsProvider>
  </AuthProvider>,
document.getElementById('root'));
