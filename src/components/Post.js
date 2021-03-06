import React from 'react'


const Post = ({post, clickHandlerRemovePost}) => {

  
 
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
	  <br/>
      <i>{post.email}</i>
	  <br/>

      <b>{post.body}</b>
	  <br/>

      <p>{post.id}</p>
      
      <button onClick={() => {clickHandlerRemovePost(post.id)}}>X</button>
    </div>
  )
}

export default Post
