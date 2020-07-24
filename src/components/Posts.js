import React from 'react'
import * as contentful from 'contentful'
import BlogItems from './BlogItems'

class Posts extends React.Component {
  state = {
    posts: []
  }


  client = require('contentful').createClient({
    space: 'a9ly9rah62ns',
    accessToken: 'hO5sRsMG9k4UpzhQhX44CTG2-mE39O2ZolIvEzgBMJY'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  
   
  fetchPosts = () => this.client.getEntries({content_type: 'blogPost'})
  setPosts = response => {
    this.setState({
      posts: response.items
    })
    console.log(response.items);

  }
  render() {
    return (
      
        <div className='contents'>
            <h3 className='blog-title'>Blog</h3>
      <BlogItems posts={this.state.posts}/>
      <br/>
     
    </div>
    )
  }
}
export default Posts