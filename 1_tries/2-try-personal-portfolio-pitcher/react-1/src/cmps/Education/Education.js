import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import EducationTheme from "./EducationTheme";
import EducationView from "./EducationView";

import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const Education = () => {
  const [state, setState] = useState([
    {
      name: "VIT",
      degree: "B.Tech CSE",
      link: "https://vit.ac.in",
      score: "CGPA : 8.78",
      from: "02/12/2021",
      to: "01/01/2022",
    },
  ]);
  const [eduTheme, setEduTheme] = useState({
    theme: {
      eduCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "eduCompUI1",
  });
  const [newCert, setNewCert] = useState({
    name: "",
    degree: "",
    link: "",
    score: "",
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
      name: "",
      degree: "",
      link: "",
      score: "",
      from: "",
      to: "",
    });
  };
  const [eduId, setEduId] = useState("");
  const educationCompCollectionRef = collection(db, "educationComponent");
  const getEducationComp = async () => {
    try {
      const data = await getDocs(educationCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setEduTheme(filteredData[0].compTheme);
      setEduId(filteredData[0].id);
    } catch (err) {
      console.error(err);
    }
  };
  const editEducationCompData = async () => {
    const certificateDoc = doc(db, "educationComponent", eduId);
    let new_cert_data = {
      compData: [...state],
      compTheme: { ...eduTheme },
    };
    await updateDoc(certificateDoc, new_cert_data);
    await getEducationComp();
  };
  useEffect(() => {
    getEducationComp();
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
              Education Data
            </h2>
            <div className="form-grid">
              <div className="inputCD">
                <label>Name</label>
                <input
                  placeholder="Enter name"
                  value={newCert.name}
                  onChange={(e) => {
                    setNewCert({ ...newCert, name: e.target.value });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>Degree</label>
                <input
                  placeholder="Enter degree"
                  value={newCert.degree}
                  onChange={(e) => {
                    setNewCert({ ...newCert, degree: e.target.value });
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
                <label>Score</label>
                <input
                  placeholder="Enter score"
                  value={newCert.score}
                  onChange={(e) => {
                    setNewCert({ ...newCert, score: e.target.value });
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
        <EducationTheme state={eduTheme} setState={setEduTheme} />
        <EducationView state={eduTheme} data={state} />

        <div className="submit-div">
          <h3>Confirm Data , Theme , UI </h3>
          <button
            className="btn"
            onClick={() => {
              editEducationCompData();
            }}
          >
            Confirm Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Education;
