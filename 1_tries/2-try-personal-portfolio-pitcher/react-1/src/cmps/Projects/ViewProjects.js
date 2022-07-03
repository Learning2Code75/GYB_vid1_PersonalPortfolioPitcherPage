import React,{useState} from 'react';
import './ViewProjects.css';
import { doc, setDoc, collection,addDoc, serverTimestamp } from "firebase/firestore";
import {db} from '../../firebase-config'

const ViewProjects = ()=>{

    const [projectData,setProjectData] = useState({});

    const handleInputProject = (e)=>{
      // console.log(e.target.id,e.target.value);
      const id = e.target.id;
      const value = e.target.value;
      setProjectData({...projectData, [id]:value})
    }

    const handleAddProject =async (e)=>{
        e.preventDefault();
        try{
          const res = await addDoc(collection(db, "projectComponent"),
           {
            ...projectData,
            timeStamp : serverTimestamp()
          }
        );
          console.log(res.id);

        }catch(err){
          console.log(err);
        }
    }
    return(
      <>
      <div className="grid">

        <div className="grid-card">
          <h2> Add , Update Project </h2>
          {/*Create project form :*/}
          <form className="createHomeForm"
            onSubmit={handleAddProject}
          >

            <div className="form-grid">
              <div className="inputCD" >
                <label>Name of Project:</label>
                <input
                  placeholder = "Name of Project"
                  type="text"
                  id={`projectName`}
                  onChange = {handleInputProject}
                />
              </div>
              <div className="inputCD">
                <label>From date:</label>
                <input
                  placeholder = "From date"
                  type="date"
                  id={`fromDate`}
                  onChange = {handleInputProject}
                />
              </div>
              <div className="inputCD">
                <label>To date:</label>
                <input
                  placeholder = "To date"
                  type="date"
                  id={`toDate`}
                  onChange = {handleInputProject}
                />
              </div>
              <div className="inputCD">
                <label>Enter Project Description:</label>
                <input
                  placeholder = "Project description"
                  type="text"
                  id={`projectDescription`}
                  onChange = {handleInputProject}
                />

              </div>
              <div className="inputCD">
                <label>Enter Project Image URL:</label>
                <input
                  placeholder = "Project Image URL"
                  type="text"
                  id={`projectImg`}
                  onChange = {handleInputProject}
                />

              </div>
              <div className="inputCD">
                <label>Enter Project Live Link:</label>
                <input
                  placeholder = "Live link of deployed project"
                  type = "text"
                  id={`projectLiveLink`}
                  onChange = {handleInputProject}
                />
              </div>
              <div className="inputCD">
                <label>Enter Github Link :</label>
                <input
                  placeholder = "GitHub link of the deployed project"
                  type="text"
                  id={`projectGithubLink`}
                  onChange = {handleInputProject}
                />
              </div>

            </div>

            <button className="btn" type="submit" >Add Project</button>

          </form>
          {
            JSON.stringify(projectData,null,2)
          }


          <li>Enter theme</li>


        </div>

      </div>


      <h2>Preview Projects</h2>
      <li>name, date, description , photo, link to pitcher( onclick ==> open in modal for project) , actual link , github link 1 </li>
      <li>name, date, description , photo, link to pitcher , actual link , github link 2 </li>
      <li>name, date, description , photo, link to pitcher , actual link , github link 3 </li>
      <li>name, date, description , photo, link to pitcher , actual link , github link 4 </li>


      <div className="PitcherPageModal">
          <h2> Add , Update pitcher page for selected project grid card </h2>
          <li> Enter youtube link , slides link for embedding </li>
          <li> Select one of these , enter data for it : [Title / Subtitle/ ImageUrl/Text/List/ Link/YouTube video link]</li>
          <li>Enter theme</li>
          ``
          <h2> Preview Pitcher page </h2>
          <div>name, date, description , photo, link to pitcher , actual link , github link 1 , youtube embed, slides embed </div>
          <li> [Title / Subtitle/ ImageUrl/Text/List/ Link/YouTube video link] + its content </li>
          <li> [Title / Subtitle/ ImageUrl/Text/List/ Link/YouTube video link] + its content </li>
          <li> [Title / Subtitle/ ImageUrl/Text/List/ Link/YouTube video link] + its content </li>
          <li> [Title / Subtitle/ ImageUrl/Text/List/ Link/YouTube video link] + its content </li>



    </div>
      </>
    );

}

export default ViewProjects;
