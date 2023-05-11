import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CertificateItem from "./CertificateItem";
import Pitcherpage from "./Pitcherpage/Pitcherpage";
import Techstack from "./Techstack/Techstack";
import ViewProjects from "./ViewProjects";
import ProjectTheme from "./ProjectTheme";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const Projects = () => {
  const [state, setState] = useState([
    {
      projectName: "Project1",
      fromDate: "2023-04-10",
      toDate: "2023-04-10",
      projectDescription: "desc1",
      projectImg: "http://imgurl1.com",
      projectLiveLink: "livelink1",
      projectGithubLink: "ghublink1",
      techStack: [
        {
          title: "st1",
          link: "link1",
        },
      ],
      projectPitcherPage: [
        {
          title: "title",
          link: "title1",
        },
        {
          title: "subtitle",
          link: "subtitle1",
        },
        {
          title: "imgurl",
          link: "http://imgurl.com",
        },
        {
          title: "text",
          link: "text1",
        },
        {
          title: "listitem",
          link: "listitem1",
        },
        {
          title: "link",
          link: "http://link1.com",
        },
      ],
    },
  ]);
  const [newCert, setNewCert] = useState({
    projectName: "",
    fromDate: "",
    toDate: "",
    projectDescription: "",
    projectImg: "",
    projectLiveLink: "",
    projectGithubLink: "",
    techStack: [],
    projectPitcherPage: [],
  });
  const [projectTheme, setProjectTheme] = useState({
    theme: {
      projectCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      linkColor: "#ffffff",
      titleColor: "#ffccff",
    },
    ui: "projectCompUI1",
  });
  const addNewCert = () => {
    let new_state = [...state];
    new_state.push({
      ...newCert,
    });
    setState(new_state);
    setNewCert({
      projectName: "",
      fromDate: "",
      toDate: "",
      projectDescription: "",
      projectImg: "",
      projectLiveLink: "",
      projectGithubLink: "",
      techStack: [],
      projectPitcherPage: [],
    });
  };

  const [projectId, setProjectId] = useState("");

  const projectsCompCollectionRef = collection(db, "projectsComponent");
  const getProjectsComp = async () => {
    try {
      const data = await getDocs(projectsCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0].compData);
      setProjectTheme(filteredData[0].compTheme);
      setProjectId(filteredData[0].id);
    } catch (err) {
      console.error(err);
    }
  };
  const editProjectsCompData = async () => {
    const projectsDoc = doc(db, "projectsComponent", projectId);
    let new_cert_data = {
      compData: [...state],
      compTheme: { ...projectTheme },
    };
    await updateDoc(projectsDoc, new_cert_data);
    await getProjectsComp();
  };
  useEffect(() => {
    getProjectsComp();
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
              Projects Data
            </h2>
            <div className="form-grid">
              <div className="inputCD">
                <label>Project Name</label>
                <input
                  placeholder="Enter project name"
                  value={newCert.projectName}
                  onChange={(e) => {
                    setNewCert({ ...newCert, projectName: e.target.value });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>From Date</label>
                <input
                  value={newCert.fromDate}
                  type="date"
                  onChange={(e) => {
                    setNewCert({ ...newCert, fromDate: e.target.value });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>To Date</label>
                <input
                  type="date"
                  value={newCert.toDate}
                  onChange={(e) => {
                    setNewCert({ ...newCert, toDate: e.target.value });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>Project Description</label>
                <input
                  placeholder="Enter project desc"
                  value={newCert.projectDescription}
                  onChange={(e) => {
                    setNewCert({
                      ...newCert,
                      projectDescription: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>Project Img URL</label>
                <input
                  placeholder="Enter Project Img URL"
                  value={newCert.projectImg}
                  onChange={(e) => {
                    setNewCert({ ...newCert, projectImg: e.target.value });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>Project Live Link</label>
                <input
                  placeholder="Enter project live link"
                  value={newCert.projectLiveLink}
                  onChange={(e) => {
                    setNewCert({ ...newCert, projectLiveLink: e.target.value });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>Project Github link</label>
                <input
                  placeholder="Enter project Github link"
                  value={newCert.projectGithubLink}
                  onChange={(e) => {
                    setNewCert({
                      ...newCert,
                      projectGithubLink: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="inputCD">
                <label>Project Tech Stack</label>
              </div>
              <Techstack
                newCert={newCert}
                setNewCert={setNewCert}
                state={state}
                setState={setState}
              />

              <div className="inputCD">
                <label>Project Pitcher Page</label>
              </div>
              <Pitcherpage
                newCert={newCert}
                setNewCert={setNewCert}
                state={state}
                setState={setState}
              />

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
        <ProjectTheme state={projectTheme} setState={setProjectTheme} />
        <ViewProjects data={state} state={projectTheme} />
        <div className="submit-div">
          <h3>Confirm Data , Theme , UI </h3>
          <button
            className="btn"
            onClick={() => {
              editProjectsCompData();
            }}
          >
            Confirm Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
