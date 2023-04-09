import { useEffect, useState } from "react";
import "./App.css";
import {
  getDoc,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [homeComp, setHomeComp] = useState([]);
  const [projectsComp, setProjectsComp] = useState([]);

  const homeCompCollectionRef = collection(db, "homeComponent");
  const projectsCompCollectionRef = collection(db, "projectsComponent");

  const [state, setState] = useState([
    {
      projectName: "Project1",
      fromDate: "2023-04-10",
      toDate: "2023-04-10",
      projectDescription: "desc1",
      projectImg: "imgurl1",
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
  const [isPjEdit, setIsPjEdit] = useState(false);
  const clearCert = () => {
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
  const addNewCert = async () => {
    let new_state = [...state];
    new_state.push({
      ...newCert,
    });
    setState(new_state);
    clearCert();
    try {
      await addDoc(projectsCompCollectionRef, newCert);
      await getProjectsComp();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCert = async (id) => {
    const certDoc = doc(db, "projectsComponent", id);
    await deleteDoc(certDoc);
    await getProjectsComp();
  };

  const editCert = async () => {
    const certDoc = doc(db, "projectsComponent", newCert?.id);
    await updateDoc(certDoc, newCert);
    await getProjectsComp();
    setIsPjEdit(false);
    clearCert();
  };

  const getProjectsComp = async () => {
    try {
      const data = await getDocs(projectsCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjectsComp(filteredData);
    } catch (err) {
      console.err(err);
    }
  };
  useEffect(() => {
    const getHomeComp = async () => {
      try {
        const data = await getDocs(homeCompCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setHomeComp(filteredData[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getHomeComp();

    getProjectsComp();
  }, []);

  return (
    <div className="App">
      <div>
        <h4>Home Comp</h4>
        <div>
          <pre>{JSON.stringify(homeComp, null, 2)}</pre>
        </div>
      </div>
      <div>
        <h4>Projects Comp</h4>
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
                setNewCert({ ...newCert, projectGithubLink: e.target.value });
              }}
            />
          </div>
          <div className="inputCD">
            <label>Project Tech Stack</label>
          </div>
          <div className="inputCD">
            <label>Project Pitcher Page</label>
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
                onClick={() => {
                  if (isPjEdit) {
                    editCert();
                  } else {
                    addNewCert();
                  }
                }}
              >
                <span>{isPjEdit ? "Edit" : "Add"} Certification</span>
              </button>
            </label>
            <div></div>
          </div>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
        <div>
          <pre>{JSON.stringify(projectsComp, null, 2)}</pre>
          <div
            style={{
              marginBottom: "5rem",
            }}
          >
            {projectsComp.map((pj) => (
              <>
                <div>{pj.projectName}</div>
                <button
                  onClick={() => {
                    setNewCert(pj);
                    setIsPjEdit(true);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteCert(pj.id)}>Delete</button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
