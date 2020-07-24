import React from 'react'
import marked from 'marked'
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const imageStyle={
width: '65px'
}

const BlogItem = ({ article }) => {
    console.log(article);
    const { title, heroImage, image, author, body } = article.fields
   const postBody = marked(body)
   return <div>
        <h3>{title}</h3>
<p>{author && <em>{author.fields.name}</em>}
{author && <a href='{author.fields.facebook}'><FaFacebook className='social'/></a>}
{author && <a href='{author.fields.twitter}'><FaTwitter className='social'/></a>}</p>
        {heroImage && <img style={imageStyle} src={heroImage.fields.file.url}/>}
        <section dangerouslySetInnerHTML={{ __html: postBody}}/>
        <hr/>
    </div>

}

export default BlogItem