import React from 'react'
import { useGlobalContext } from './context'

function User() {

  const {isUserOpen} = useGlobalContext();


  return (
    <div className={`${isUserOpen ? 'user-submenu user-active' : 'user-submenu'}`}>
        <h4 className='user-welcome'>Welcome again, user !</h4>
    </div>
  )
}

export default User
