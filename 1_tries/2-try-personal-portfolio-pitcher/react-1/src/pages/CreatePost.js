import React from "react";
import HomeAdd from "../cmps/Home/HomeAdd";
// import Certificate from '../cmps/Certificate/CertificateAdd';
import AboutUpdate from "../cmps/About/AboutUpdate";
import Projects from "../cmps/Projects/ViewProjects.js";

import ImageAdd from "../cmps/Images/ImagesAdd";
import ImageView from "../cmps/Images/ImagesView";
import CreateHeader from "../cmps/CreateHeader";
import ContactUpdate from "../cmps/Contact/ContactUpdate";
import About from "../cmps/About/About";
import Certificate from "../cmps/Certificate/Certificate";
import Languages from "../cmps/Languages/Languages";
import Interests from "../cmps/Interests/Interests";
import Education from "../cmps/Education/Education";
import WorkExperience from "../cmps/WorkExperience/WorkExperience";

function CreatePost() {
  return (
    <div className="createPage">
      <h1>Update and Preview Components</h1>
      <CreateHeader content="Home Component" />
      <HomeAdd />

      <CreateHeader content="Contact Component" />
      <ContactUpdate />

      <h1>Add,Update,Delete and Preview Components</h1>
      <CreateHeader content="About Component" />
      <About />

      <CreateHeader content="Certificates Component" />
      <Certificate />
      <div>Certificates Theme</div>
      <div>Certificates View</div>

      <CreateHeader content="Language Component" />
      <Languages />

      <CreateHeader content="Interests Component" />
      <Interests />

      <CreateHeader content="Education" />
      <Education />
      <div>Education Theme</div>
      <div>Education View</div>

      <CreateHeader content="Work Experience" />
      <WorkExperience />
      <div>Work Experience Theme</div>
      <div>Work Experience View</div>

      <CreateHeader content="Project Component" />
      <Projects />

      {/* : modal popup for the pitcher page :
              <CreateHeader
                  content="Pitcher Page for Project x"
              />
              <ul>
                  <li> (all of work card) + [title,subtitle, image, text, list, link] </li>
              </ul>

              <h1>Add,Update,Delete and View Components</h1>

            */}

      <CreateHeader content="Images Component" />
      <ImageAdd />
      <ImageView />
    </div>
  );
}

export default CreatePost;
