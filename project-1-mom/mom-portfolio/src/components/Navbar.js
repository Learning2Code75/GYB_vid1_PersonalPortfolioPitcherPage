import React from 'react';
// import logo from '../img/shortlogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


function Navbar(){
	return (
		<nav className="navbar">
			<Link className="nav-logo" to="/"><h2>Takshila Choksi</h2></Link>		

			<ul>

				<Link className="nav-link" to="/" > <li>Home</li> </Link>
				<Link className="nav-link" to="/about"><li>About</li></Link>
				<Link className="nav-link" to="/mycreations"><li>MyCreations</li></Link>
				<a className="nav-link" href="https://docs.google.com/document/d/1ETlBTN3y5x_YbCJ0f2Pvpxgyq4VPgyjbfzeHulznooc/edit#" target="__blank" ><li>My Blog</li></a>
				<a className="nav-link" href="mailto:takshilachoksi@gmail.com" target="__blank" ><li>Contact Me</li></a>
				
			</ul>


		</nav>



	);
}

export default Navbar;