import React from 'react';

import './Categories.css'

const Categories = (props) => {

  const { categories, handleCategoryBtnClick, currentCategory } = props;


  return (
    <> 
    {
      categories.map((category, i) => {
  
        return <button className={`category-btn ${currentCategory === category && 'active'}`} key={i} onClick={() => {handleCategoryBtnClick(category)}}>{category}</button>
      })
    }

    </>
  );
};

export default Categories;
