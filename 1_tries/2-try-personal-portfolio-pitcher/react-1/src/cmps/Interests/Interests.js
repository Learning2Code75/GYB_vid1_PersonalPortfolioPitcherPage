import React, { useState } from "react";
import InterestsUpdate from "./InterestsUpdate";

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
  });

  return (
    <div className="About">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <InterestsUpdate state={state} setState={setState} />
      <div>Interests Theme</div>
      <div>Interests View</div>
    </div>
  );
};

export default Interests;
