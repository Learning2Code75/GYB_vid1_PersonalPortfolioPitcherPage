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
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <AboutUpdate state={state} setState={setState} />
      <div>About Theme</div>
      <AboutView state={state} setState={setState} />
    </div>
  );
};

export default About;
