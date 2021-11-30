import { FaTrashAlt } from "react-icons/fa";

const ToDoItem = ({ items, handleOnChange, trashClick }) => {
  return (
    <div>
      {/* {items.checked && ( */}
      <div className="bg-gray-200 m-2 p-2">
        <input
          type="checkbox"
          checked={items.checked}
          onChange={() => handleOnChange(items.id)}
        />
        <p className="inline m-2 ">
          <span className={items.checked ? "line-through" : null}>
            {items.text}
          </span>
        </p>
        <FaTrashAlt
          className="inline text-red-600"
          onClick={() => trashClick(items.id)}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default ToDoItem;
