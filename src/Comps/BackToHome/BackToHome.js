import React from 'react'
import { Link } from 'react-router-dom'
import './BackToHome.css'

function BackToHome(props) {

    const {font} = props;

    return (
        <Link to='/' className='back-home-anchor'>
            <div className='back-home-container'style={{fontFamily: font}}>
                <h3>Home</h3>
                <i class='bx bxs-home-alt-2'></i>
            </div>
        </Link>
    )
}

export default BackToHome
