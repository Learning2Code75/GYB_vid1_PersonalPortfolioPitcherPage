import React,{useState} from 'react';

import { Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import grey from '@material-ui/core/colors/grey';

import CodeSnippet from '../CodeSnippet';


function PreprocessingTensorFlow(){

const step3_code = `
import pandas as pd
df = pd.read_csv("data.csv")
df.head()
`



	return (
		<>
			<div className="logo_topic_livebtns">
				<div className="logo_topic_livebtns-logo">Logo</div>
				<div className="logo_topic_livebtns-topic">
				<h1>Preprocessing and TensorFlow</h1>
				<p>This project is the showcase of my first steps in learning Machine Learning and
				Artificial Intelligence. Natural Language Processing plays a vital role in Machine Learning.
				This project portrays the steps to be taken before a machine learning model is built.These steps are taken to 
				clean the data set and make it ready to be given as an input to our ML model.</p>

				</div>
				<div className="logo_topic_livebtns-livebtns">
					<Link href="" target="_blank">
					<IconButton><GitHubIcon style={{ color: grey[500], fontSize: 50 }} />  </IconButton>
  					</Link>	
				</div>
			</div>	

			<div className="glimpse_navigator">
				<div className="glimpse_navigator-glimpse">
					<hr/>
					Image Gallery of different outputs
					<hr/>
				</div>
				<div className="glimpse_navigator-navigator">
					<a href="#step1"><CheckCircleOutlineIcon/>Step1</a>
					<a href="#step1"><CheckCircleOutlineIcon/>Step2</a>
					<a href="#step1"><CheckCircleOutlineIcon/>Step3</a>
				</div>
			</div>

			<div className="steps-grid">
				<div className="step1">
					<h2 id="step1">Find a data set to practice with.</h2>
					<p>This is the most important part of the journey. That is to find a 
						dataset that suites your needs. Here are some of the sources where 
						you can find a data set for yourself.
					</p>
					<ol>
						<li><a href="https://uci.edu/" target="_blank">UCI</a></li>
						<li><a href="https://www.kaggle.com/" target="_blank">Kaggle</a></li>
						<li><a href="https://data.gov.in/" target="_blank">Gov India</a></li>
						<li><a href="https://www.data.gov/" target="_blank">Gov US</a></li>
						<li><a href="https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/00Index.html  " target="_blank">R Repository</a></li>
						<li><a href="https://ieee-dataport.org/" target="_blank">IEEE</a></li>
						<li><a href="https://www.quandl.com/" target="_blank">quandl</a></li>
						<li><a href="https://data.worldbank.org/" target="_blank">worldbank</a></li>
						<li><a href="https://grouplens.org/" target="_blank">grouplens</a></li>
						<li><a href="https://github.com/awesomedata/awesome-public-datasets" target="_blank">awesomedata</a></li>
						<li><a href="https://github.com/bayandin/awesome-awesomeness" target="_blank">bayandin</a></li>
						<li><a href="https://github.com/sindresorhus/awesome" target="_blank">sindresorhus</a></li>
					</ol>

				</div>

				<div className="step2">
					<h2 id="step2">Import the data into your Jupyter Notebook</h2>
					<p>Here is a video link expaining how to download and setup your Jupyter Notebook:
						<ol>
							<li><a href="https://www.youtube.com/watch?v=Yg9AkozItTU" target="_blank">For Ubuntu(Linux)</a></li>
							<li><a href="https://www.youtube.com/watch?v=otmWEEFysms" target="_blank">For Windows</a></li>
							<li><a href="https://www.youtube.com/watch?v=YA8Nq8Tlma4" target="_blank">For Mac OS</a></li>
						</ol>
					</p>				
				</div>
				<div className="step3">
					<h2 id="step3">Import data set using pandas library</h2>
					<p>Pandas is a library in python that helps you to import different types
						of file formats in your python code as dataframe objects.
					</p>
					<CodeSnippet code = {step3_code}/>
				</div>	




			</div>

		</>
	);
}


export default PreprocessingTensorFlow;

