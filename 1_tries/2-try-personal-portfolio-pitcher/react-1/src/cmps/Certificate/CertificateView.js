import React from "react";

const CertificateView = ({ state, setState, data }) => {
  return (
    <div
      className={state.ui}
      style={{
        background: `rgba(${state.theme.certCompBackground.r},${state.theme.certCompBackground.g},${state.theme.certCompBackground.b},${state.theme.certCompBackground.a})`,
        color: `${state.theme.textColor}`,
      }}
    >
      <div className="certGrid1">
        {data.map((d) => (
          <div
            className="certGrid1Item"
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
            <div>{d.other}</div>
            <div>From :{d.from}</div>
            <div>To :{d.to}</div>
          </div>
        ))}
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default CertificateView;
