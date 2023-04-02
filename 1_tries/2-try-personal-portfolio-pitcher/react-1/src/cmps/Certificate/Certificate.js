import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const certLabels = ["Title", "Organization", "Link", "Other"];
const Certificate = () => {
  const [state, setState] = useState([
    {
      title: "Title1",
      organization: "Org1",
      link: "Link1",
      other: "Other1",
      from: "02/12/2021",
      to: "01/01/2022",
    },
    {
      title: "Title2",
      organization: "Org2",
      link: "Link2",
      other: "Other2",
      from: "02/12/2021",
      to: "01/01/2022",
    },
    {
      title: "Title3",
      organization: "Org3",
      link: "Link3",
      other: "Other3",
      from: "02/12/2021",
      to: "01/01/2022",
    },
  ]);
  const [newCert, setNewCert] = useState({
    title: "",
    organization: "",
    link: "",
    other: "",
    from: "",
    to: "",
  });
  return (
    <>
      <div className="Certificates">
        <div className="createCertificateForm">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Certificates Data
          </h2>
          <div className="form-grid">
            <div className="inputCD">
              <label>Title</label>
              <input placeholder="Enter title" />
            </div>
            <div className="inputCD">
              <label>Organization</label>
              <input placeholder="Enter organization" />
            </div>
            <div className="inputCD">
              <label>Link</label>
              <input placeholder="Enter link" />
            </div>
            <div className="inputCD">
              <label>Other</label>
              <input placeholder="Enter other details" />
            </div>
            <div className="inputCD">
              <label>From</label>
              <input type="date" />
            </div>
            <div className="inputCD">
              <label>To</label>
              <input type="date" />
            </div>
            <div className="inputCD">
              <label>
                <button
                  className="btn"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                  onClick={{}}
                >
                  <span>Add Certification</span> <IoMdAdd />
                </button>
              </label>
              <div></div>
            </div>
          </div>
          <pre>{JSON.stringify(state, null, 2)}</pre>
          <pre>{JSON.stringify(newCert, null, 2)}</pre>

          {state.map((c) => (
            <div
              className="form-grid"
              style={{
                borderBottom: "1px solid lightgrey",
              }}
            >
              <div className="inputCD">
                <label>{certLabels[0]}</label>
                <input value={c.title} />
              </div>
              <div className="inputCD">
                <label>{certLabels[1]}</label>
                <input value={c.organization} />
              </div>
              <div className="inputCD">
                <label>{certLabels[2]}</label>
                <input value={c.link} />
              </div>
              <div className="inputCD">
                <label>{certLabels[3]}</label>
                <input value={c.other} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
