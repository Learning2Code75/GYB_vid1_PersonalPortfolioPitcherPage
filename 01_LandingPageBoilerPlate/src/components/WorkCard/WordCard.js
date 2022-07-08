import React from 'react';
import { Link } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';


import { AiFillHtml5,AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import {FaProjectDiagram,FaDochub,FaReact} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si';

import './WorkCard.css';

export const WorkCard = ({ cardBackground,techStack,description,logo,title,live,docs,source }) => {

    return (
	<div class="card" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
          + cardBackground})`,
      backgroundRepeat: "no-repeat"
    }} >
			{/*svg logo and tech stack used*/}
			<div class="card-header">
				<img class="card-header-logo"
					src = {logo}
					alt={`${title} Logo`} />

				<p class="card-header-techstack">
					 {/*Tech Stack used (react icons with tooltip)*/}
					 {techStack.includes('html') && <AiFillHtml5 class="tech-icon html" />}
					 {techStack.includes('css') && <DiCss3 class="tech-icon css" />}
					 {techStack.includes('js') && <IoLogoJavascript class="tech-icon js" />}
					 {techStack.includes('react') && <FaReact class="tech-icon react" />}
					 {techStack.includes('typescript') && <SiTypescript class="tech-icon typescript" />}

				</p>
			</div>

			<div class="card-content">
				<h2 class="card-title">{title}</h2>
				<p class="card-body">
					{description}
				</p>

				<p class="card-buttons">
					{/*button to: go to project page (deployed) :Live Project*/}
					<a href={live} class="button" target="_blank"><FaProjectDiagram /> Live</a>
					{/*button to: go to project pitcher page (deployed) :Project details*/}
					<a href={docs} class="button" target="_blank"><FaDochub /> Docs</a>
					{/*button to: go to github code of the project:Github Source*/}
					<a href={source} class="button" target="_blank"><AiFillGithub /> Source</a>


				</p>
			</div>

		</div>

    );
}
