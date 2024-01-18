import React from "react";
import { useAppContext } from "../contexts/ContextProvider";

const List = () => {
  const { list, inputValue, setInputValue, addItem, removeItem, clearList } =
    useAppContext();

  return (
    <div>
      <input
        type="text"
        id="shopping-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <button id="clear-list" onClick={clearList}>
        Clear List
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button id={`remove-${item}`} onClick={() => removeItem(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
