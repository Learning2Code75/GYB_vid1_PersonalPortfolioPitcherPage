import React, { useState } from "react";
import AboutUpdate from "./AboutUpdate";
import AboutView from "./AboutView";

const About = () => {
  const [state, setState] = useState({
    desc: "Desc1",
    currPos: "Full Stack Developer",
    skills: [
      {
        title: "Dev Languages",
        values: ["java", "javascript"],
      },
      {
        title: "Dev Frameworks",
        values: ["NodeJS", "ReactJS", "Apollo GraphQL"],
      },
      {
        title: "Database",
        values: ["Firebase", "MongoDB", "PostgreSQL"],
      },
    ],
  });

  return (
    <div className="About">
      <AboutUpdate state={state} setState={setState} />
      <AboutView state={state} setState={setState} />
    </div>
  );
};

export default About;
