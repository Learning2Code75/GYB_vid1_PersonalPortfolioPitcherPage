import React from "react";
import HomeAdd from "../cmps/Home/HomeAdd";
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
import Projects from "../cmps/Projects/Projects";

function CreatePost() {
  return (
    <div className="createPage">
      {/* <h1>Update and Preview Components</h1> */}
      <CreateHeader content="Home Component" />
      <HomeAdd />

      <CreateHeader content="Contact Component" />
      <ContactUpdate />

      {/* <h1>Add,Update,Delete and Preview Components</h1> */}
      <CreateHeader content="About Component" />
      <About />

      <CreateHeader content="Certificates Component" />
      <Certificate />

      <CreateHeader content="Language Component" />
      <Languages />

      <CreateHeader content="Interests Component" />
      <Interests />

      <CreateHeader content="Education" />
      <Education />

      <CreateHeader content="Work Experience" />
      <WorkExperience />

      <CreateHeader content="Project Component" />
      <Projects />
      <div>Project Theme</div>
      <div>Project View</div>
      <div>Pitcherpage Theme</div>
      <div>Pitcherpage View</div>

      <CreateHeader content="Images Component" />
      <ImageAdd />
      <ImageView />
    </div>
  );
}

export default CreatePost;
