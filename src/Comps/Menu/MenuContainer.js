import React, { useState, useEffect } from 'react';
import Menu from './Comps/Menu/Menu';
import Categories from './Comps/Categories/Categories';
import items from './data';
import BackToHome from '../BackToHome/BackToHome';
import './MenuContainer.css'

// dynamic approach to get unique values in an array 
// first we get the items category, we use the set method with the destructuring and then we add the all category
const uniqueCategories = ['All', ...new Set(items.map(item => item.category))]



function App() {

  const [menus, setMenus] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);
  const [currentCategory, setCurrentCategory] = useState('')

  const handleCategoryBtnClick = (category) => {
    setCurrentCategory(category)
    if (category === 'All') {
      return setMenus(items)
    }  
    const filteredMenus = items.filter(menu => menu.category === category);
    return setMenus(filteredMenus)
  }

  useEffect(() => {
    setCurrentCategory('All')
  }, [])


  return (

    <section className='menus-section'>

      <BackToHome font='Heebo, sans-serif'/>

      <h2 className='menu-intro-title'>Our Menu</h2>
      <div className='underline'></div>

      <div className='btn-container'>

        <Categories categories={categories} handleCategoryBtnClick={handleCategoryBtnClick} currentCategory={currentCategory} />

      </div>

      <div className='menus-wrapper'>
        <Menu menus={menus} />
      </div>

    </section>

  );
}

export default App;
