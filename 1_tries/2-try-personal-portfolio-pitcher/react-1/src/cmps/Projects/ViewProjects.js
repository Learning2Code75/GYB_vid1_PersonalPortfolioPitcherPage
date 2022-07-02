import React from 'react';
import './ViewProjects.css';

const ViewProjects = ()=>{

    return(
      <>
      <div className="grid">

        <div className="grid-card">
          <h2> Add , Update Project </h2>
          <div className="createProjectForm">
            <input
              placeholder = "Name of Project"
              type="text"
            />
            <input
              placeholder = "From date"
              type="date"
            />
            <input
              placeholder = "To date"
              type="date"
            />

            <input
              placeholder = "Enter project description"
              type="text"
            />

            <input
              placeholder = "Enter project Image URL"
              type="text"
            />

            <input
              placeholder = "Enter live link of deployed project"
              type = "text"
            />

            <input
              placeholder = "Enter github link of the deployed project"
              type="text"
            />


            <button className="btn" >Add Project</button>

          </div>
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
