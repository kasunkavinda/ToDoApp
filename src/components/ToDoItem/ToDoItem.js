import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ToDoItem = ({ list }) => {
  const [isChecked, setIsChecked] = useState(list.checked);
  const [trashed, setTrashed] = useState(true);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const trashClick = (trashId) => {
    setTrashed(!trashed);
  };

  return (
    <div>
      {trashed && (
        <div className="bg-gray-200 m-2 p-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <p className="inline m-2 ">
            <span className={isChecked ? "line-through" : null}>
              {list.text}
            </span>
          </p>
          <FaTrashAlt
            className="inline text-red-600"
            onClick={() => trashClick(list.id)}
          />
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
