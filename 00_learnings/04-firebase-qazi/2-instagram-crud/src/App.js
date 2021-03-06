// named imports
import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

// own imports
import './App.css';
import Post from './cmps/Post';
import {db} from './firebase/config'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle]= useState(getModalStyle);
  const [posts,setPosts]= useState([]);
  const [open,setOpen] = useState(false);
  const [username,setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password,setPassword] = useState('');


  useEffect(()=>{
    db.collection('posts')
      .onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=> ({
          post:doc.data(),
          id:doc.id
          })
        ));

      })
  },[]);


  return (
    <div className="app">
      <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
            <div style={modalStyle} className={classes.paper}>
              <center>
                <img src="" 
                alt="signup header"
                className="app__headerImage" />

                <Input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />

                <Button onClick = >
                  Signup
                </Button>

              </center>     
            
            </div>
            
      </Modal>

      {/*Header*/}

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>

      <Button onClick={()=>setOpen(true)}>
        Signup
      </Button>

      <h1>Instagram CRUD</h1>

      {/*Posts*/}
      {console.log(posts)}
     
      {posts.map(({post,id})=>(
          <Post key={id}  username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
       ))}
  

    </div>
  );
}

export default App;
