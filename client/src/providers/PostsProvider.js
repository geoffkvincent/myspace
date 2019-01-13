import React from 'react'
import axios from 'axios'

const PostsContext = React.createContext()
export const PostsConsumer = PostsContext.Consumer

export class PostsProvider extends React.Component {
  state = { posts: [] }

  getPosts = () => {
    axios.get("api/posts")
      .then( res => this.setState({ posts: res.data }))
      .catch(res => console.log(res))
  }

  render() {
    return(
      <PostsContext.Provider value = {{
        ...this.state,
        getPosts: this.getPosts,
      }}>
        {this.props.children}
      </PostsContext.Provider>
    )
  }
}