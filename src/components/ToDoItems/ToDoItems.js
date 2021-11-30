import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoItems = ({ items, handleOnChange, trashClick }) => {
  return (
    <div>
      {items.map((dummy_todo) => {
        return (
          <div key={dummy_todo.id}>
            <ToDoItem
              items={dummy_todo}
              handleOnChange={handleOnChange}
              trashClick={trashClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItems;
