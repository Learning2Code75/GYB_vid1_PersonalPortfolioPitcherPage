import React, { useEffect, useState } from "react";
import LanguagesTheme from "./LanguagesTheme";
import LanguagesUpdate from "./LanguagesUpdate";
import LanguagesView from "./LanguagesView";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const Languages = () => {
  const [state, setState] = useState({
    skills: [
      {
        title: "English",
        values: ["Working Proficiency"],
      },
      {
        title: "Hindi",
        values: ["Read", "Write", "Speak"],
      },
      {
        title: "Gujarati",
        values: ["Read", "Write", "Speak"],
      },
    ],
    theme: {
      langCompBackground: { r: 13, g: 32, b: 108, a: 100 },
      textColor: "#00ccff",
      titleColor: "#00ccff",
    },
    ui: "langCompUI1",
  });

  const languageCompCollectionRef = collection(db, "languageComponent");
  const getLanguageComp = async () => {
    try {
      const data = await getDocs(languageCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setState(filteredData[0]);
    } catch (err) {
      console.error(err);
    }
  };
  const editLanguageCompData = async () => {
    const languageDoc = doc(db, "languageComponent", state?.id);
    await updateDoc(languageDoc, state);
    await getLanguageComp();
  };
  useEffect(() => {
    getLanguageComp();
  }, []);

  return (
    <div className="About">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <LanguagesUpdate state={state} setState={setState} />
      <div className="ContactView">
        <LanguagesTheme state={state} setState={setState} />
        <LanguagesView state={state} />
      </div>
      <div className="submit-div">
        <h3>Confirm Data , Theme , UI </h3>
        <button
          className="btn"
          onClick={() => {
            editLanguageCompData();
          }}
        >
          Confirm Changes
        </button>
      </div>
    </div>
  );
};

export default Languages;
