import React from 'react';
import neelchoksi from '../img/neelchoksi.jpg'
function Home(){
	return (
		<div className="home">
				<h1 className="header">Home</h1>
				<div className="profile">
					<h1>FullStack Web Developer</h1>
					<p>Hi, I am Neel Choksi</p>
					<img src={neelchoksi} alt="Neel Choksi" />
					
				</div>
				<div className="vision">
					<h1>Vision</h1>
					<p>I am passionate about web development and looking forward to learn new backend and frontend frameworks.</p>	
				</div>
				
		</div>



	);
}

export default Home;