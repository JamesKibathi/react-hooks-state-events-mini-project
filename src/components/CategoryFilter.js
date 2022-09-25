import React, {useState} from "react";

function CategoryFilter({categories, onCategoryFilter}) {

const [selectedCat, setSelectedCat]=useState(0);

const buttonCategory=categories.map((category,index)=>
  <button key={index.category} className={selectedCat===index ? "selected":""}
  onClick={()=>{onCategoryFilter(category)
    setSelectedCat(index)}}>{category}</button>)
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonCategory}
    </div>
  );
}

export default CategoryFilter;
