import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import CertificateTheme from "./CertificateTheme";
import CertificateView from "./CertificateView";
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
  const addNewCert = () => {
    let new_state = [...state];
    new_state.push({
      ...newCert,
    });
    setState(new_state);
    setNewCert({
      title: "",
      organization: "",
      link: "",
      other: "",
      from: "",
      to: "",
    });
  };
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
              <input
                placeholder="Enter title"
                value={newCert.title}
                onChange={(e) => {
                  setNewCert({ ...newCert, title: e.target.value });
                }}
              />
            </div>
            <div className="inputCD">
              <label>Organization</label>
              <input
                placeholder="Enter organization"
                value={newCert.organization}
                onChange={(e) => {
                  setNewCert({ ...newCert, organization: e.target.value });
                }}
              />
            </div>
            <div className="inputCD">
              <label>Link</label>
              <input
                placeholder="Enter link"
                value={newCert.link}
                onChange={(e) => {
                  setNewCert({ ...newCert, link: e.target.value });
                }}
              />
            </div>
            <div className="inputCD">
              <label>Other</label>
              <input
                placeholder="Enter other details"
                value={newCert.other}
                onChange={(e) => {
                  setNewCert({ ...newCert, other: e.target.value });
                }}
              />
            </div>
            <div className="inputCD">
              <label>From</label>
              <input
                type="date"
                value={newCert.from}
                onChange={(e) => {
                  setNewCert({ ...newCert, from: e.target.value });
                }}
              />
            </div>
            <div className="inputCD">
              <label>To</label>
              <input
                type="date"
                value={newCert.to}
                onChange={(e) => {
                  setNewCert({ ...newCert, to: e.target.value });
                }}
              />
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
                  onClick={() => addNewCert()}
                >
                  <span>Add Certification</span> <IoMdAdd />
                </button>
              </label>
              <div></div>
            </div>
          </div>
          {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(newCert, null, 2)}</pre> */}

          {state.map((c, idx) => (
            <CertificateItem
              c={c}
              idx={idx}
              certs={state}
              setCerts={setState}
            />
          ))}
        </div>
        <CertificateTheme state={state} setState={setState} />
        <CertificateView state={state} setState={setState} />
      </div>
    </>
  );
};

export default Certificate;
