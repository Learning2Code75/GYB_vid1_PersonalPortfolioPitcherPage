import React, { useState } from "react";
import LanguagesTheme from "./LanguagesTheme";
import LanguagesUpdate from "./LanguagesUpdate";
import LanguagesView from "./LanguagesView";

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
    theme: {
      langCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "langCompUI1",
  });

  return (
    <div className="About">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <LanguagesUpdate state={state} setState={setState} />
      <div className="ContactView">
        <LanguagesTheme state={state} setState={setState} />
        <LanguagesView state={state} />
      </div>
    </div>
  );
};

export default Languages;
