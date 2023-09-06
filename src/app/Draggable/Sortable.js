import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
// import { Card } from "../../../@/components/ui/card";

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const transitionString = transition ? CSS.Transform.toString(transition) : "";
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transitionString,
  };

  const deleteItem = (id) => {
    props.deleteSkill(id);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Ensure propagation is stopped
    deleteItem(props.id);
  };

  return (
<div className="bg-white rounded shadow-md">
  <div className="p-4" ref={setNodeRef} style={style} {...attributes}>
    <div className="bg-gray-200 p-3 rounded-md">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">{props.name}</p>
        <div className="space-x-2">
          <Button  {...listeners}>
            Drag
          </Button>
          <Button  onClick={handleButtonClick}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
