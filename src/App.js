import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {

  const [posts, setPosts] = useState([])

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

  return (
    <div className="App">
      {posts.map(p => <Post post={p} key={p.id}/>)}
    </div>
  );
}

export default App;
