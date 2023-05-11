import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import WorkExperienceTheme from "./WorkExperienceTheme";
import WorkExperienceView from "./WorkExperienceView";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const WorkExperience = () => {
  const [state, setState] = useState([
    {
      title: "Software dev intern",
      organization: "TZ",
      link: "Link1",
      place: "Remote",
      other: "fullstack dev",
      from: "02/12/2021",
      to: "01/01/2022",
    },
    {
      title: "Software dev intern",
      organization: "TZ",
      link: "Link1",
      place: "Remote",
      other: "fullstack dev",
      from: "02/12/2021",
      to: "01/01/2022",
    },
  ]);
  const [workexpTheme, setWorkexpTheme] = useState({
    theme: {
      workexpCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#ffffff",
      titleColor: "#ffccff",
    },
    ui: "workexpCompUI1",
  });
  const [newCert, setNewCert] = useState({
    title: "",
    organization: "",
    link: "",
    place: "",
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
      place: "",
      other: "",
      from: "",
      to: "",
    });
  };
  const [workexpId, setWorkexpId] = useState("");

  const workexpCompCollectionRef = collection(db, "workexpComponent");
  const getWorkexpComp = async () => {
    try {
      const data = await getDocs(workexpCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setWorkexpTheme(filteredData[0].compTheme);
      setWorkexpId(filteredData[0].id);
    } catch (err) {
      console.error(err);
    }
  };
  const editWorkexpCompData = async () => {
    const workexpDoc = doc(db, "workexpComponent", workexpId);
    let new_cert_data = {
      compData: [...state],
      compTheme: { ...workexpTheme },
    };
    await updateDoc(workexpDoc, new_cert_data);
    await getWorkexpComp();
  };
  useEffect(() => {
    getWorkexpComp();
  }, []);
  return (
    <>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <div className="ContactView">
        <div className="Certificates">
          <div className="createCertificateForm">
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Work Experience Data
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
                <label>Place</label>
                <input
                  placeholder="Enter place"
                  value={newCert.place}
                  onChange={(e) => {
                    setNewCert({ ...newCert, place: e.target.value });
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
        </div>
        <WorkExperienceTheme state={workexpTheme} setState={setWorkexpTheme} />
        <WorkExperienceView data={state} state={workexpTheme} />
        <div className="submit-div">
          <h3>Confirm Data , Theme , UI </h3>
          <button
            className="btn"
            onClick={() => {
              editWorkexpCompData();
            }}
          >
            Confirm Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
