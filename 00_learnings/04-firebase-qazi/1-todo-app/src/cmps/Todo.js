import React,{useState} from 'react';
import { ListItem , ListItemText , Button,Modal,Input} from '@material-ui/core';
import {projectFirestore} from '../firebase/config';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme)=>({
	paper:{
		 position: 'absolute',
		  top: '50%',
		  left: '50%',
		  transform: 'translate(-50%, -50%)',
		  width: 400,
		  bgcolor: '#fff',
		  border: '2px solid #000',
		  boxShadow: 24,
 		 	p: 4,
 		 	padding:theme.spacing(2,4,3)
	},
}))




const Todo =({todo})=>{
	const classes = useStyles()
	const [open,setOpen] = useState(false);
	const [input,setInput] = useState('');

	const handleOpen =()=>{
		setOpen(true);
	}

	const handleClose =()=>{
		setOpen(false);
	}

	const updateTodo = ()=>{
		projectFirestore.collection('todos')
						.doc(todo.id)
						.set({
							todo:input,

						},{
							merge:true
						});
		setOpen(false);
	}	

	return(
		<>
		<Modal
		  open={open}
		  onClose={event => setOpen(false)}
		>
			<div className={classes.paper}>
				<h1>Update Todo Item</h1>
    			<Input placeholder={todo.todo} value={input} id="my-input" onChange={e => setInput(e.target.value)}/>

					

				<Button onClick={updateTodo}>Update</Button>

			</div>
		</Modal>

		<ListItem
			alignItems='center'
		>	
		{/*	<ListItemAvatar >
				<Avatar>
					<ImageIcon />	
				</Avatar>
			</ListItemAvatar>
		*/}	
			<ListItemText primary={todo.todo} secondary="Todo" />
			<Button variant="outlined" color="primary"
				onClick={event => setOpen(true)}
			>
  				Edit
			</Button>
			<Button variant="outlined" color="secondary"
				onClick={event => projectFirestore.collection('todos').doc(todo.id).delete()}
			>
  				<DeleteForeverIcon/>Delete
			</Button>
		</ListItem>
		</>
	);
}

export default Todo;