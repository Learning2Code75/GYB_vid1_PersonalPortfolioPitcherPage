import React,{useState,useEffect} from 'react';

const AboutUpdate = ()=>{

  const [AboutCompData,setAboutCompData] = useState({
    currPos:"Full Stack Developer",
    devLangs:["java","javascript"],
    devFrameworks:["NodeJS","ReactJS","Apollo GraphQL"],
    database:["Firebase","MongoDB","PostgreSQL"],
    education:[
      {place:"School",percent:"95.67%",name:"CNM School"},
      {place:"College",percent:"80.1%",name:"GPM Junior College"},
      {place:"B.Tech Engineering",percent:"8.68CGPA",name:"VIT Vellore"}
    ]
})

  return(
    <>
      <h1>About Component</h1>
    </>

  )



}

export default AboutUpdate
