import React from 'react'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data.js'
import User from './User'


const Navbar = () => {

  
  const { openSidebar, openSubmenu, closeSubmenu, displayUser } = useGlobalContext();
  console.log(openSidebar)

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const btnTargeted = e.target.getBoundingClientRect();
    const center = (btnTargeted.left + btnTargeted.right) / 2;
    openSubmenu(page, center)
  }


  const handleNavbarOver = (e) => {
    if(!e.target.classList.contains('nav-links-btn')){
      return closeSubmenu()
    }
  }  

  return (

    <nav  onMouseOver={handleNavbarOver}>
      <div className='navbar'>

    
      <div className='logo-container'>
        <img src={logo} alt="stripe" />
      </div>
      <div className='burger-menu-container' onClick={openSidebar}>
        <FaBars fontSize="1.3rem" color='white' padding="0" />
      </div>
      <ul className='nav-links-container' type='none'>
        {
          sublinks.map((link, i) => {
            const { page } = link;
            return (
              <li key={i}>
                <button className='nav-links-btn' onMouseOver={displaySubmenu}>{page}</button>
              </li>
            )
          })
        }
      </ul>
      <div className='user-btn-container' onClick={displayUser} >
        <button className='user-btn'> <i class='bx bxs-user'></i></button>
        <User />
      </div>
      </div>
    </nav>

  )
}

export default Navbar
