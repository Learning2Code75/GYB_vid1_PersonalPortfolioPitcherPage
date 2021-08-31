import React from 'react';
import Vision1 from '../img/vision/vision1.jpg'

function Home(){
	return (
		<div className="home">
			<h1>Home Page</h1>
			<div className="introduction">
				<p>Hi,I am Takshila Choksi</p>
				<p>A Passionate Professional home cook , 35+ years experience.</p> 
				<img src={Vision1} alt="Vision" />
			</div>

			<div className="vision">
				<h2>My Vision</h2>
				<p>Exploring new recipes daily to enhance cooking skills.</p>
			</div>
		</div>



	);
}

export default Home;