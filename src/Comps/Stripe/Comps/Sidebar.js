import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './context'
import User from './User'

const Sidebar = () => {

  const {closeSidebar, isSidebarOpen} = useGlobalContext()

  return (

    <div className={`${isSidebarOpen ? 'sidebar-active' : 'sidebar'}`}>
      <div className='close-sidebar-btn-container'>
        <button className='close-sidebar-btn' onClick={closeSidebar}>X</button>
      </div>
      <div>
        {
          sublinks.map((sublink, i) => {
            return (
              <div key={i} className='sidebar-page-content'>
                <div >
                  <h3 className='sidebar-page'>{sublink.page}</h3>
                </div>
                <ul type='none' className='sidebar-sublinks-container'>
                  {
                    sublink.links.map((link, i) => {
                      return (
                        <li key={i} className='sidebar-link'>
                          <p className='sidebar-label'>{link.label}</p>
                          <p className='sidebar-icon'>{link.icon}</p>
                        </li>
                      )

                    })
                  }
                </ul>
                
              </div>
            )
          })
        }
      </div>
      <User />
    </div>

  )
}

export default Sidebar
