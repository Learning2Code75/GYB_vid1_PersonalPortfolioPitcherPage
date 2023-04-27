import React from "react";

const InterestsView = ({ state }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.interestsCompBackground.r},${state.theme.interestsCompBackground.g},${state.theme.interestsCompBackground.b},${state.theme.interestsCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    >
      <div className={"interestsGrid1"}>
        {state.skills.map((s) => (
          <div className={"interestsGrid1Item"}>
            <h3
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              {s.title}
            </h3>
            <div>
              {s.values.map((v) => (
                <div>{v}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsView;
