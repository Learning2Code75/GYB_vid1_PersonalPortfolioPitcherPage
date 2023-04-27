import React from "react";

const WorkExperienceView = ({ data, state }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.workexpCompBackground.r},${state.theme.workexpCompBackground.g},${state.theme.workexpCompBackground.b},${state.theme.workexpCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    ></div>
  );
};

export default WorkExperienceView;
