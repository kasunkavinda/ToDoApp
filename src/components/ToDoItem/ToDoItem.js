import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ToDoItem = ({ id, checked, text }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="bg-gray-200 m-2 p-2">
        <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
        <p className="inline m-2 ">
          <span className={isChecked ? "line-through" : null}>{text}</span>
        </p>
        <FaTrashAlt className="inline text-red-600" />
      </div>
    </div>
  );
};

export default ToDoItem;
