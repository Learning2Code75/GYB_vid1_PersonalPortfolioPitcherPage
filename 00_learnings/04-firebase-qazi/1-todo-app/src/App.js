import React,{useState,useEffect} from 'react';
import {Button,Input,FormControl,InputLabel,List} from '@material-ui/core';
import './App.css';
import {projectFirestore,timestamp} from './firebase/config';

import Todo from './cmps/Todo';

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  useEffect(()=>{
    projectFirestore.collection('todos')
                    .orderBy('timestamp','desc')
                    .onSnapshot(snapshot=>{
                      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
                    })
    // console.log(todos)
  },[]);
    

  const addTodo =(event)=>{
    event.preventDefault();
    // setTodos([...todos,input])
    setInput('');
    projectFirestore.collection('todos').add({
      todo:input,
      timestamp:timestamp()
    })
  }

  return (
    <div className="App">
     <h1>Todo List App Firebase React</h1>

    <FormControl>
      <InputLabel htmlFor="my-input">Write TODO</InputLabel>
      <Input value={input} id="my-input" onChange={e => setInput(e.target.value)}/>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="outlined" href="#contained-buttons">
      Add Todo
      </Button>
     </FormControl>
    

     <List>
        {todos.map(todo=>(<Todo  key={todo.id} todo ={todo}/>))}
     </List>
    </div>
  );
}

export default App;
