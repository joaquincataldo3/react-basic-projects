import React from 'react'
import BackToHome from '../BackToHome/BackToHome'
import './NotFound.css'

function NotFound() {
    return (
        <main>
            <div className='notfound-text-container'>
                    <h1>The page you were looking for doesn't exist</h1>
                    <h2>You can try with the button below</h2>
            </div>
            <BackToHome font='Rubik, sans-serif'/>
        </main>
    )
}

export default NotFound
