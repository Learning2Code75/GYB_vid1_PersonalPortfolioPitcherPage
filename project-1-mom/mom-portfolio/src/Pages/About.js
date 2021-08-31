import React from 'react';
import Aboutme1 from '../img/about_me/aboutme1.jpg';
import Aboutme2 from '../img/about_me/aboutme2.jpg';
function About(){
	return (
		<div className="AboutMe">
			<h1>About Me</h1>
			<div className="aboutme">
				<p>Passionate Professional home cook , 35+ years experience.</p>
				<img src={Aboutme2} alt="About Me"  height="350px" width="300px"/>
				
			</div>
			<div className="message">
				<p>Hi,do you struggle daily to cook a meal for yourself?</p>
				<p>Are you fed up of ordering food?</p>
				<p>Check out my blog page <a href="https://docs.google.com/document/d/1ETlBTN3y5x_YbCJ0f2Pvpxgyq4VPgyjbfzeHulznooc/edit#" target="__blank">here</a></p>
			</div>

		</div>



	);
}

export default About;