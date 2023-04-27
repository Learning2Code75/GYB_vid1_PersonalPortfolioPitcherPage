import React, { useState } from "react";
import InterestsTheme from "./InterestsTheme";
import InterestsUpdate from "./InterestsUpdate";
import InterestsView from "./InterestsView";

const Interests = () => {
  const [state, setState] = useState({
    skills: [
      {
        title: "Cubing",
        values: ["23 sec - 3x3"],
      },
      {
        title: "Music",
        values: ["Percussion", "Listening"],
      },
      {
        title: "Books",
        values: ["Self help"],
      },
      {
        title: "Skateboarding",
        values: ["Beginner"],
      },
    ],
    theme: {
      interestsCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "interestsCompUI1",
  });

  return (
    <div className="About">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <InterestsUpdate state={state} setState={setState} />
      <div className="ContactView">
        <InterestsTheme state={state} setState={setState} />
        <InterestsView state={state} />
      </div>
    </div>
  );
};

export default Interests;
