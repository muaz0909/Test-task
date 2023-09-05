import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Card } from "reactstrap";

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const transitionString = transition ? CSS.Transform.toString(transition) : "";
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transitionString, // Use the formatted transition string
  };
  const deleteItem = (id) => {
    props.deleteSkill(id);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    deleteItem(props.id);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
          <Card body className="m-3">
            <div className="d-flex justify-content-between">
              <p>{props.name}</p>
            </div>
          </Card>
        </div>
        <Button
          style={{
            position: "absolute",
            top: "20px", // Adjust the top position as needed
            right: "30px", // Adjust the right position as needed
          }}
          color="danger"
          size="sm"
          onClick={handleButtonClick}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
