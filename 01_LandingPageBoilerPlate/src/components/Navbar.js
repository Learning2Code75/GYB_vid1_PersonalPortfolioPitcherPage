import React from 'react';

//import logo from '../img/logo.svg';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Navbar(){
	// const handleContact =()=>{

	// }
	return (
		<nav className="navbar">
			<Link className="nav-logo" to="/"><h1>Neel Choksi</h1></Link>		
			<h3>Personal Portfolio</h3>

			<ul>

				<Link className="nav-link" to="/"> <li>Home</li> </Link>
				<Link className="nav-link" to="/about"><li>About Me</li></Link>
				<Link className="nav-link" to="/work"><li>My Work</li></Link>
				<Link className="nav-link" to="/resume"><li>Resume</li></Link>
				<li>
					 <Button variant="contained" color="primary" href="mailto:neelchoksi1611@gmail.com" target="_top" startIcon={<MailOutlineIcon />}>
					    Contact me
					 </Button>
				</li>
				
			</ul>


		</nav>



	);
}

export default Navbar;