import React, { useState } from "react";
import AboutTheme from "./AboutTheme";
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
    theme: {
      aboutCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "aboutCompUI1",
  });

  return (
    <div className="About">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <AboutUpdate state={state} setState={setState} />
      <div className="ContactView">
        <AboutTheme state={state} setState={setState} />
        <AboutView state={state} setState={setState} />
      </div>
    </div>
  );
};

export default About;
