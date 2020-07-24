const client = require('contentful').createClient({
    space: 'a9ly9rah62ns',
    accessToken: 'hO5sRsMG9k4UpzhQhX44CTG2-mE39O2ZolIvEzgBMJY'
  })
  
  const getBlogPosts = () => client.getEntries().then(response => response.items)
  
  const getSinglePost = slug =>
    client
      .getEntries({
        'fields.slug': slug,
        content_type: 'blogPost'
      })
      .then(response => response.items)
  
  export { getBlogPosts, getSinglePost }