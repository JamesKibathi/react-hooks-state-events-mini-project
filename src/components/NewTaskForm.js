import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const [text,setText]=useState("");
  const [category, setCategory]=useState("Code");

  function handleSubmit(event){
    event.preventDfault();
    onTaskFormSubmit({text,category})
  }

  function handleChange(e){
    setText(e.target.value)
  }

  function handleCatChange(e){
    setCategory(e.target.value)
  }
  
  const newCategories=categories.slice(1);
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input onChange={handleChange} value={text} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCatChange}>
          {/* render <option> elements for each category here */}
        {newCategories.map((category,id)=>{
          return <option key={id}>{category}</option>
        })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
