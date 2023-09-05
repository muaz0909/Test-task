"use client";

import { useEffect, useState } from "react";
import AutoSuggest from "react-autosuggest";
import styles from "./page.module.css";
import Draggable from "./Draggable/Draggable";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "skills", "util");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const _data = docSnap.data();
        const lowerCasedSkills = _data.skills.map((skill) => {
          return {
            id: skill.id,
            name: skill.name.toLowerCase(),
          };
        });
        setSkills(lowerCasedSkills);
      } else {
        console.log("No such document!");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedSkills, "Selected Skills");
    console.log(skills, "All Skills");
    // Extract the ids from both arrays
    const idsArray1 = skills.map((item) => item.name);
    const idsArray2 = selectedSkills.map((item) => item.name);

    // Filter array2 to remove items with ids that are in array1
    const filteredArray2 = skills.filter(
      (item) => !idsArray2.includes(item.name)
    );

    console.log(filteredArray2);
    setSkills([...filteredArray2]);
  }, [selectedSkills]);

  function getSuggestions(value) {
    return skills.filter((skill) =>
      skill.name.includes(value.trim().toLowerCase())
    );
  }

  return (
    <div className={styles.main}>
      <div className="px-4">
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
            setValue(value);
            setSuggestions(getSuggestions(value));
          }}
          onSuggestionSelected={(_, { suggestionValue, suggestion }) => {
            setSelectedValue(suggestion);
            setValue("");
          }}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
          inputProps={{
            placeholder: "Type",
            value: value,
            onChange: (_, { newValue, method }) => {
              setValue(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />
      </div>
      <Draggable value={selectedValue} setSelectedSkills={setSelectedSkills} />
    </div>
  );
}
