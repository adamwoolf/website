import React from 'react'
import BlogItem from './BlogItem'

const BlogItems = ({posts}) => (
  <div className="box content">
    {posts.map((article, index) => 
  <BlogItem article={article} key={index} />)}

  </div>
)
export default BlogItems