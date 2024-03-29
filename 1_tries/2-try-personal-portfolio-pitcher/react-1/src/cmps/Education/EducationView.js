import React from "react";

const EducationView = ({ state, data }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.eduCompBackground.r},${state.theme.eduCompBackground.g},${state.theme.eduCompBackground.b},${state.theme.eduCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    >
      <div className={"eduGrid1"}>
        {data.map((ed) => (
          <div
            className={"eduGrid1Item"}
            style={{
              border: `1px solid ${state.theme.textColor}`,
            }}
          >
            <h3
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              {ed.name}
            </h3>
            <h5>{ed.degree}</h5>
            <a
              style={{
                color: `${state.theme.linkColor}`,
              }}
              href={ed.link}
              target="__blank"
            >
              {ed.link}
            </a>
            <div>{ed.score}</div>
            <div>{ed.from}</div>
            <div>{ed.to}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationView;
