import React from "react";

const WorkExperienceView = ({ data, state }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.workexpCompBackground.r},${state.theme.workexpCompBackground.g},${state.theme.workexpCompBackground.b},${state.theme.workexpCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    >
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="workexpGrid1">
        {data.map((d) => (
          <div
            className="workexpGrid1Item"
            style={{
              border: `1px solid ${state.theme.textColor}`,
            }}
          >
            <h3
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              {d.title}
            </h3>
            <div>{d.organization}</div>

            <a
              href={d.link}
              target="__blank"
              style={{
                color: `${state.theme.linkColor}`,
              }}
            >
              {d.link}
            </a>
            <div>{d.place}</div>
            <div>{d.other}</div>
            <div>From: {d.from}</div>
            <div>To: {d.to}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceView;
