import React from 'react'


const Post = ({post}) => {

  console.log(post);
 
  return (
    <div style={{
      border: `solid 2px black`,
      display:`flex`,
      flexDirection:`column`,
      gap:`5px`

    }}>
      <p>{post.name}</p>
      <p>{post.email}</p>
      <p>{post.body}</p>
      <p>{post.id}</p>
      

    </div>
  )
}

export default Post