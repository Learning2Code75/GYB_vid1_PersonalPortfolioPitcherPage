import React from "react";
import HomeAdd from "../cmps/Home/HomeAdd";
// import Certificate from '../cmps/Certificate/CertificateAdd';
import AboutUpdate from "../cmps/About/AboutUpdate";
import Projects from "../cmps/Projects/ViewProjects.js";

import ImageAdd from "../cmps/Images/ImagesAdd";
import ImageView from "../cmps/Images/ImagesView";
import CreateHeader from "../cmps/CreateHeader";
import ContactUpdate from "../cmps/Contact/ContactUpdate";

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
      <AboutUpdate />
      <CreateHeader content="Certificates Component" />

      <ul>
        <li>title, organization 1, link </li>
        <li>title, organization 2, link </li>
      </ul>

      <CreateHeader content="Language Component" />

      <ul>
        <li>lang1 </li>
        <li>lang2 </li>
        <li>lang3 </li>
        <li>lang4 </li>
      </ul>

      <CreateHeader content="Interests Component" />
      <ul>
        <li>intersts1 </li>
        <li>intersts2 </li>
        <li>intersts3 </li>
        <li>intersts4 </li>
      </ul>

      <CreateHeader content="Education" />
      <ul>
        <li>10th :CNMS date to from</li>
        <li>12th :GPM date to from</li>
        <li>B.Tech CSE from VIT date to from</li>
      </ul>

      <CreateHeader content="Work Experience" />
      <ul>
        <li>position , compnay name, date : from to, place, achievement 1</li>
        <li>position , compnay name, date : from to, place, achievement 2</li>
        <li>position , compnay name, date : from to, place, achievement 3</li>
        <li>position , compnay name, date : from to, place, achievement 4</li>
        <li>position , compnay name, date : from to, place, achievement 5</li>
      </ul>

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
