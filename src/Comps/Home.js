import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../projectsdata'
import './Home.css'


function Home() {

    return (
        <>
            <nav>

            </nav>
            <main className='react-projects-main'>

                <h1 className='react-intro-title'>Basic react projects</h1>
                <div className='projects-container'>

                    {
                        projects.map((project, i) => {
                            const { name, description, img } = project
                            const wordCount = name => {
                                const count = name.split(' ').length
                                if (count > 1) {
                                    const array = name.split(' ');
                                    const arrayDash = array.join('-')
                                    return arrayDash
                                }
                                return name
                            }
                            const nameTested = wordCount(name)

                            return (
                                <Link to={`/${nameTested}`} key={i} className='project-link'>
                                    <div className='project-container'>
                                        <div className='project-info-container'>
                                            <h2 className='project-title'>{name}</h2>
                                            <p className='project-description'>{description}</p>
                                        </div>
                                        <div className='project-img-container'>
                                            <img src={img} alt={name} />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }


                </div>
            </main>
        </>
    )
}

export default Home
