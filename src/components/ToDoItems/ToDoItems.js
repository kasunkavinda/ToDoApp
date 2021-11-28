import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const dummy_todo_list = [
  { id: 1, checked: false, text: "To do item 1" },
  { id: 2, checked: true, text: "To do item 2" },
  { id: 3, checked: false, text: "To do item 3" },
];

const ToDoItems = () => {
  return (
    <div>
      {dummy_todo_list.map((dummy_todo) => {
        return (
          <div key={dummy_todo.id}>
            <ToDoItem
              id={dummy_todo.id}
              checked={dummy_todo.checked}
              text={dummy_todo.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItems;
