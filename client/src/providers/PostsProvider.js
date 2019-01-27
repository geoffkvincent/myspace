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

  addPost = (post) => {
    axios.post(`/api/users/${post.userId}/posts`, {post})
      .then( ({data}) => this.setState({ posts: [data, ...this.state.posts] }) )
      .catch( res => console.log(res))
  }

  addLike = (post, user) => {
    debugger
    axios.put(`/api/users/${post.userId}/posts/${post.postId}/add_like`, {user})
      .then( ({data}) => {
        const posts = this.state.posts.map( p => {
          if (p.id === post.postId)
            return data
             return p
        })
        this.setState({ posts })
      })
  }

  updatePost = (post) => {
    axios.put(`/api/users/${post.userId}/posts/${post.postId}`, {post})
      .then( ({data}) => {
        const posts = this.state.posts.map( p => {
          if (p.id === post.postId)
            return data
             return p
        })
        this.setState({ posts })
      })
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
        addPost: this.addPost,
        updatePost: this.updatePost,
        addLike: this.addLike,
        deletePost: this.deletePost
      }}>
        {this.props.children}
      </PostsContext.Provider>
    )
  }
}