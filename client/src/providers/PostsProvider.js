import React from 'react'
import axios from 'axios'

const PostsContext = React.createContext()
export const PostsConsumer = PostsContext.Consumer

export class PostsProvider extends React.Component {
  state = { posts: [] }

  getPosts = (id) => {
    axios.get(`/api/users/${id}/posts`)
      .then( res => this.setState({ posts: res.data }))
      .catch(res => console.log(res))
  }

  deletePost = (post) => {
    axios.delete(`/api/users/${post.userId}/posts/${post.id}`)
      .then( res => {
        const posts = this.state.posts.filter( p => {
          if(p.id !== post.id)
            return p
              return null
        })
        this.setState({ posts })
      })
  }

  render() {
    return(
      <PostsContext.Provider value = {{
        ...this.state,
        getPosts: this.getPosts,
        deletePost: this.deletePost
      }}>
        {this.props.children}
      </PostsContext.Provider>
    )
  }
}