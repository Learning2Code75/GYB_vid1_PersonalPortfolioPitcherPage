import React from 'react';

import { WorkCard } from './WorkCard/WordCard';

const Work = ()=>{
	return (
		<div className="work">

			<h1>Projects for Clients</h1>

			<div className="work__learningf__grid">
				<WorkCard
					cardBackground="/gyb_card.png"
					techStack={['html','css','js']}
					description = "Landing Page for your company with product/service display pages showcasing your company's products/services and their speciality.We will also help you build your portfolio page showcasing your projects and work with separate pages for describing your projects along with your resume."
					logo = "/growYourBusinessLogo.png"
					title = "Grow Your Business"
					live="https://github.com/Learning2Code75/neelpersonalprojects/tree/main/development_for_client_based"
					docs="https://github.com/Learning2Code75/neelpersonalprojects/tree/main/development_for_client_based"
					source="https://github.com/Learning2Code75/neelpersonalprojects/tree/main/development_for_client_based"
				/>

				<WorkCard
					title = "B2B Purchase Order"
					techStack={['react','css','typescript']}
					description="Business to Business Purchase Order system."
					cardBackground=""
					logo=""
					live="https://github.com/Learning2Code75/neelpersonalprojects/tree/main/development_for_client_based"
					docs="https://github.com/Learning2Code75/neelpersonalprojects/tree/main/development_for_client_based"
					source="https://github.com/Learning2Code75/neelpersonalprojects/tree/main/development_for_client_based"

				/>

			{/*
				vid1: PersonalPortfolio - React, CSS
				vid2: GrowYourBusiness - HTML , CSS , JS , d3
				vid3: MicroBlog - Next, MongoDB 
				vid4: MacroBlog - Next, Sanity
				vid5: BookkeepingManagement - Graphql, Mongo, React, Apollo
				vid6: InventoryManagementSystem - Graphql, Mongo, React, Apollo
				vid7: BusinessToConsumerPO - Graphql, Mongo, React, Apollo
				vid8: BusinessToBusinessPO - Graphql, Mongo, React, Apollo
				vid9: dataAnalytics - R, shiny.js
			*/}



			</div>





			<h1>Type of Project</h1>

			<div className="work__learningf__grid">
			{/*	<WorkCard
					header="Project Name"
					githubLink="https://github.com/Learning2Code75/"
					pitcherLink="/PreprocessingTensorFlow"
					deployedLink="https://github.com/Learning2Code75/"
				/>
			*/}
			</div>





		</div>



	);
}

export default Work;
