import React, { useState, useEffect } from "react";

const AboutUpdate = () => {
  const [AboutCompData, setAboutCompData] = useState({
    currPos: "Full Stack Developer",
    devLangs: ["java", "javascript"],
    devFrameworks: ["NodeJS", "ReactJS", "Apollo GraphQL"],
    database: ["Firebase", "MongoDB", "PostgreSQL"],
  });

  return (
    <>
      <h1>About Component</h1>
    </>
  );
};

export default AboutUpdate;
