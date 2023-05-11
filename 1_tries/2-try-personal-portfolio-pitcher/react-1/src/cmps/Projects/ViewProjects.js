import React from "react";
import PitcherPageDialog from "./Pitcherpage/PitcherPageDialog";

const ViewProjects = ({ data, state }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.projectCompBackground.r},${state.theme.projectCompBackground.g},${state.theme.projectCompBackground.b},${state.theme.projectCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    >
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="projectCompGrid1">
        {data.map((d) => (
          <div
            className="projectCompGrid1Item"
            style={{
              border: `1px solid ${state.theme.textColor}`,
            }}
          >
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              {d.projectName}
            </h4>
            <div>
              {d.fromDate} to {d.toDate}
            </div>
            <div>{d.projectDescription}</div>
            <img
              src={d.projectImg}
              alt="project img"
              style={{
                border: `1px solid ${state.theme.textColor}`,
                borderRadius: ".75rem",
                height: "500px",
                width: "600px",
              }}
            />
            <a
              style={{
                color: `${state.theme.linkColor}`,
              }}
              href={d.projectLiveLink}
              target="__blank"
            >
              {d.projectLiveLink}
            </a>
            <a
              style={{
                color: `${state.theme.linkColor}`,
              }}
              href={d.projectGithubLink}
              target="__blank"
            >
              {d.projectGithubLink}
            </a>
            <div className="projectCompGrid1">
              {d.techStack.map((ts) => (
                <div
                  className="projectCompGrid1Item"
                  style={{
                    border: `1px solid ${state.theme.textColor}`,
                  }}
                >
                  <a
                    style={{
                      color: `${state.theme.linkColor}`,
                    }}
                    href={ts.link}
                    target="__blank"
                  >
                    {ts.title}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <PitcherPageDialog data={d.projectPitcherPage} state={state} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProjects;
