import React from 'react'


const Post = ({post}) => {

  
 
  return (
    <div style={{
      border: `solid 2px black`,
      display:`flex`,
      flexDirection:`column`,
      gap:`5px`,
      backgroundColor:`wheat`,
      fontSize:25
    }}>
      <h2>{post.name}</h2>
      <i>{post.email}</i>
      <b>{post.body}</b>
      <p>{post.id}</p>
      

    </div>
  )
}

export default Post