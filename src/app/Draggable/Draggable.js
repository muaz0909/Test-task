import "bootstrap/dist/css/bootstrap.min.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState, useMemo } from "react";
import { Button } from "reactstrap";
import { SortableItem } from "./Sortable";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Draggable({ value, setSelectedSkills }) {
  const [languages, setLanguages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (value !== "") {
      setLanguages([...languages, value]);
      setSelectedSkills([...languages, value]);
    }
  }, [value]);

  const save = () => {
    setLoader(true);
    const docRef = doc(db, "skill", "util");
    setDoc(docRef, { skills: [...languages] });
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  const deleteSkill = (id) => {
    setLanguages(languages.filter((e) => e.id !== id));
    const docRef = doc(db, "skill", "util");
    setDoc(docRef, { skills: languages.filter((e) => e.id !== id) });
  };

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "skill", "util");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const _data = docSnap.data();
        setLanguages(_data.skills ?? []);
      } else {
        console.log("No such document!");
      }
    }
    fetchData();
  }, []);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="p-3" style={{ width: "50%" }} align="center">
        <div className="d-flex justify-content-between px-3">
          {" "}
          <h3>Skills!</h3>
          <Button onClick={save} color="primary">
            {loader ? "Loading" : "Save"}
          </Button>
        </div>
        <SortableContext
          items={languages?.map((e) => e)}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {languages?.map((language) => (
            <SortableItem
              key={language.id}
              id={language.id}
              name={language.name}
              deleteSkill={deleteSkill}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);
    languages.indexof;
    if (active.id !== over.id) {
      setLanguages((items) => {
        console.log(items);
        const activeIndex = items.findIndex((object) => {
          return object.id === active.id;
        });
        const overIndex = items.findIndex((object) => {
          return object.id === over.id;
        });
        console.log(activeIndex, overIndex);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default Draggable;
