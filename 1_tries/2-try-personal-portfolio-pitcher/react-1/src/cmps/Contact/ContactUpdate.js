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
      nameTheme: "#ff00ff",
      photoTheme: "#ffccff",
      positionTheme: "#ffcccf",
      personalPitchTheme: "#ffccff",
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
      <pre>{JSON.stringify(state, null, 2)}</pre>
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
            <h3>Name Color</h3>
            {/* <button className="btn-sm" onClick={nameThemeChange}>Change</button> */}
            <ChromePicker
            // color={HomeCompData.theme.nameTheme}
            // onChange={(newColor) =>
            //   setHomeCompData({
            //     ...HomeCompData,
            //     theme: { ...HomeCompData.theme, nameTheme: newColor.hex },
            //   })
            // }
            />
          </div>
          <div className="tgComp">
            <h3>Position Color</h3>
            {/* <button className="btn-sm" onClick={positionThemeChange}>Change</button> */}
            <ChromePicker
            // color={HomeCompData.theme.positionTheme}
            // onChange={(newColor) =>
            //   setHomeCompData({
            //     ...HomeCompData,
            //     theme: {
            //       ...HomeCompData.theme,
            //       positionTheme: newColor.hex,
            //     },
            //   })
            // }
            />
          </div>
          <div className="tgComp">
            <h3>Personal Pitch Color</h3>
            {/* <button className="btn-sm" onClick={personalPitchThemeChange}>Change</button> */}
            <ChromePicker
            // color={HomeCompData.theme.personalPitchTheme}
            // onChange={(newColor) =>
            //   setHomeCompData({
            //     ...HomeCompData,
            //     theme: {
            //       ...HomeCompData.theme,
            //       personalPitchTheme: newColor.hex,
            //     },
            //   })
            // }
            />
          </div>
          <div className="tgComp">
            <h3>Image Border Color</h3>
            {/* <button className="btn-sm" onClick={photoThemeChange}>Change</button> */}
            <ChromePicker
            // color={HomeCompData.theme.photoTheme}
            // onChange={(newColor) =>
            //   setHomeCompData({
            //     ...HomeCompData,
            //     theme: { ...HomeCompData.theme, photoTheme: newColor.hex },
            //   })
            // }
            />
          </div>

          <div className="tgComp">
            <h3>Select User Interface </h3>
            <button
              className="btn-sm"
              // onClick={() => {
              //   setHomeCompData({ ...HomeCompData, ui: "ui1" });
              // }}
            >
              UI 1
            </button>
            <button
              className="btn-sm"
              // onClick={() => {
              //   setHomeCompData({ ...HomeCompData, ui: "ui2" });
              // }}
            >
              UI 2
            </button>
            <button
              className="btn-sm"
              // onClick={() => {
              //   setHomeCompData({ ...HomeCompData, ui: "ui3" });
              // }}
            >
              UI 3
            </button>
            <button
              className="btn-sm"
              // onClick={() => {
              //   setHomeCompData({ ...HomeCompData, ui: "ui4" });
              // }}
            >
              UI 4
            </button>
          </div>
        </div>
        <div
          className={state.ui}
          style={{
            backgroundColor: `rgba(${state.theme.contactcompBackground.r},${state.theme.contactcompBackground.g},${state.theme.contactcompBackground.b},${state.theme.contactcompBackground.a})`,
          }}
        >
          <div className="contactCompItem">
            <div>Email</div>
            <div>{state.email}</div>
          </div>
          {/* <h1 style={{ color: `${state.theme.nameTheme}` }}>{state.name}</h1>
          <h2 style={{ color: `${state.theme.positionTheme}` }}>
            {state.position}
          </h2>
          <p style={{ color: `${state.theme.personalPitchTheme}` }}>
            {state.personalPitch}
          </p> */}

          {/* <h3 style={{color:`${HomeCompData.theme.photoTheme}`}}>{HomeCompData.photo.imgDesc}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUpdate;
