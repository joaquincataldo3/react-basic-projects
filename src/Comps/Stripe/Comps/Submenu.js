import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {

  const { isSubmenuOpen, location, page: { page, links }, openSubmenu } = useGlobalContext();
  const submenuContainer = useRef(null);

  useEffect(() => {
    const submenu = submenuContainer.current;
    submenu.style.left = `${location}px`
  }, [location])


  return (
    <div className={`${isSubmenuOpen ? 'submenu submenu-active' : 'submenu'}`} ref={submenuContainer} onMouseOver={openSubmenu}>
      <div className='triangle arrow-up'></div>
      <div>
        <ul type='none'>
          {
            links.map((link, i) => {
              return (
                <li className='submenu-link-container' key={i}>
                  <p>{link.label}</p>
                  {link.icon}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Submenu
