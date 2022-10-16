import React, { useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";

const ContactUpdate = () => {
  const [state, setState] = useState({
    email: "",
    number: "",
    address: "",
    linkedInURL: { type: "URL", data: "" },
    githubURL: { type: "URL", data: "" },
    theme: {
      contactcompBackground: { r: 0, g: 0, b: 0, a: 100 },
      textColor: "#ff00ff",
      linkColor: "#ffccff",
      titleColor: "#ffccff",
    },
    ui: "contactCompUI1",
  });

  const handleLinkedInURL = (e) => {
    let new_state = { ...state };
    new_state.linkedInURL.data = e.target.value;
    setState(new_state);
  };
  const handleGithubURL = (e) => {
    let new_state = { ...state };
    new_state.githubURL.data = e.target.value;
    setState(new_state);
  };
  return (
    <div className="ContactUpdate">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <div className="createContactForm">
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Contact Component Data
        </h2>

        <div className="form-grid">
          <div className="inputCD">
            <label>Email :</label>
            <input
              placeholder="Enter email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="inputCD">
            <label>Number :</label>
            <input
              placeholder="Enter phone number"
              value={state.number}
              onChange={(e) => setState({ ...state, number: e.target.value })}
            />
          </div>
          <div className="inputCD">
            <label>Address :</label>
            <input
              placeholder="Enter address"
              value={state.address}
              onChange={(e) => setState({ ...state, address: e.target.value })}
            />
          </div>
          <div className="inputCD">
            <label>LinkedIn URL :</label>
            <input
              placeholder="Enter email"
              value={state.linkedInURL.data}
              onChange={handleLinkedInURL}
            />
          </div>
          <div className="inputCD">
            <label>Github URL :</label>
            <input
              placeholder="Enter email"
              value={state.githubURL.data}
              onChange={handleGithubURL}
            />
          </div>
        </div>
      </div>

      <div className="ContactView">
        <div className="themeGrid">
          <div className="tgComp">
            <h3>Contact Background</h3>
            {/* <button className="btn-sm" onClick={homeThemeChange}>Change</button> */}
            <SketchPicker
              color={state.theme.contactcompBackground}
              onChange={(newColor) => {
                setState({
                  ...state,
                  theme: {
                    ...state.theme,
                    contactcompBackground: newColor.rgb,
                  },
                });
                // console.log(HomeCompData)
              }}
            />
          </div>
          <div className="tgComp">
            <h3>Title Color</h3>
            {/* <button className="btn-sm" onClick={positionThemeChange}>Change</button> */}
            <ChromePicker
              color={state.theme.titleColor}
              onChange={(newColor) =>
                setState({
                  ...state,
                  theme: {
                    ...state.theme,
                    titleColor: newColor.hex,
                  },
                })
              }
            />
          </div>
          <div className="tgComp">
            <h3>Text Color</h3>
            {/* <button className="btn-sm" onClick={nameThemeChange}>Change</button> */}
            <ChromePicker
              color={state.theme.textColor}
              onChange={(newColor) =>
                setState({
                  ...state,
                  theme: { ...state.theme, textColor: newColor.hex },
                })
              }
            />
          </div>
          <div className="tgComp">
            <h3>URL Color</h3>
            {/* <button className="btn-sm" onClick={positionThemeChange}>Change</button> */}
            <ChromePicker
              color={state.theme.linkColor}
              onChange={(newColor) =>
                setState({
                  ...state,
                  theme: {
                    ...state.theme,
                    linkColor: newColor.hex,
                  },
                })
              }
            />
          </div>

          <div className="tgComp">
            <h3>Select User Interface </h3>
            <button
              className="btn-sm"
              onClick={() => {
                setState({ ...state, ui: "contactCompUI1" });
              }}
            >
              UI 1
            </button>
            <button
              className="btn-sm"
              onClick={() => {
                setState({ ...state, ui: "contactCompUI2" });
              }}
            >
              UI 2
            </button>
            <button
              className="btn-sm"
              onClick={() => {
                setState({ ...state, ui: "contactCompUI3" });
              }}
            >
              UI 3
            </button>
            <button
              className="btn-sm"
              onClick={() => {
                setState({ ...state, ui: "contactCompUI4" });
              }}
            >
              UI 4
            </button>
          </div>
        </div>
        <div
          className={state.ui}
          style={{
            backgroundColor: `rgba(${state.theme.contactcompBackground.r},${state.theme.contactcompBackground.g},${state.theme.contactcompBackground.b},${state.theme.contactcompBackground.a})`,
            color: `${state.theme.textColor}`,
          }}
        >
          <div className="contactCompItem">
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              Email
            </h4>
            <div>{state.email}</div>
          </div>
          <div className="contactCompItem">
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              Number
            </h4>
            <div>{state.number}</div>
          </div>
          <div className="contactCompItem">
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              Address
            </h4>
            <div>{state.address}</div>
          </div>
          <div className="contactCompItem">
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              LinkedIn
            </h4>
            <a
              target="__blank"
              style={{
                color: `${state.theme.linkColor}`,
              }}
              href={state.linkedInURL.data}
            >
              {state.linkedInURL.data}
            </a>
          </div>
          <div className="contactCompItem">
            <h4
              style={{
                color: `${state.theme.titleColor}`,
              }}
            >
              Github
            </h4>
            <a
              target="__blank"
              style={{
                color: `${state.theme.linkColor}`,
              }}
              href={state.githubURL.data}
            >
              {state.githubURL.data}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUpdate;
