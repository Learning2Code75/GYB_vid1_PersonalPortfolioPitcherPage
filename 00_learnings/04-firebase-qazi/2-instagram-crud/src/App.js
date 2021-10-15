// named imports
import React,{useState,useEffect} from 'react';

// own imports
import './App.css';
import Post from './cmps/Post';
import {db} from './firebase/config'

function App() {

  const [posts,setPosts]= useState([
      {
        username:"learning2Code75",
        caption:"keep those vids coming in",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      },
      {
        username:"user2",
        caption:"keep those vids coming in",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

      },
      {
        username:"user3",
        caption:"keep those vids coming in",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

      },
      {
        username:"user4",
        caption:"keep those vids coming in",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

      }
    ]);

  useEffect(()=>{
    db.collection('posts')
      .onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=>({
          id:doc.id,
          post:doc.data()
        })))
      })
  },[posts])

  return (
    <div className="app">

      {/*Header*/}

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>

      <h1>Instagram CRUD</h1>

      {/*Posts*/}
        {posts.map(({id,post})=>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))}

     

    </div>
  );
}

export default App;
