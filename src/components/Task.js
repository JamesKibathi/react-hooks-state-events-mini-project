import React from "react";

function Task({ text, category, id, deleteTask }) {

  function handleClick() {
    deleteTask(id);
  }

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
