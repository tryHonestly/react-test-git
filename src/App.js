import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';






function App() {

  const [posts, setPosts] = useState([])
  const [postValue, setPostValue] = useState(``)

  const fetchPosts = async () => {
    const asyncRes = await axios.get(`https://jsonplaceholder.typicode.com/comments`,{
      params:{
        _limit:20
      }
    })
    setPosts(asyncRes.data)
  }

  
  useEffect(() => {
    fetchPosts()
  }, [])

  console.log(postValue);
  const clickHandler = () => {
    const newPost = {
      body: postValue,
      email: "TEST@TEST",
      id: 17,
      name: "TEST",
      postId: 4,
    }
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <div>
        <h1>add post</h1>
        <input type="text" value={postValue} onChange={(e) => {setPostValue(e.target.value)}}/>
        <button onClick={clickHandler}>add</button>
      </div>

      {posts.map(p => <Post post={p} key={p.id}/>)}
    </div>
  );
}

export default App;
