import React, { useState } from "react";
import LanguagesUpdate from "./LanguagesUpdate";

const Languages = () => {
  const [state, setState] = useState({
    skills: [
      {
        title: "English",
        values: ["Working Proficiency"],
      },
      {
        title: "Hindi",
        values: ["Read", "Write", "Speak"],
      },
      {
        title: "Gujarati",
        values: ["Read", "Write", "Speak"],
      },
    ],
  });

  return (
    <div className="About">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <LanguagesUpdate state={state} setState={setState} />
      <div>Languages Theme</div>
      <div>Languages View</div>
    </div>
  );
};

export default Languages;
