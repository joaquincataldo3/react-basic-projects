import React, { useState } from 'react';



function Tab(props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(false)

    const { characters, loading } = props;


    const handleCharacterClick = (i) => {
        setCurrentIndex(i)
    }

    return (
        <>  
           
            {
                !loading &&
                <section className='characters-section'>


                    <h2 className='tabs-experience'>Experience</h2>
                   


                    <div className='character-info-container'>
                        <div className='characters-name-container'>

                            {
                                characters.map((character, i) => {
                                    return (
                                        <div className='character-name' key={i} onClick={() => handleCharacterClick(i)}>
                                            <h3 className={i === currentIndex ? 'character-name character-active' : 'character-name'}>{character.company}</h3>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className='character-desc-container'>
                            <h3 className='character-title'>{characters[currentIndex].title}</h3>
                            <h3 className='character-company'>{characters[currentIndex].company}</h3>
                            <span className='character-dates'>{characters[currentIndex].dates}</span>
                            <div className='duties-container'>
                                <div className='icon-container' onClick={() => setShowDescription(!showDescription)}>
                                    {!showDescription && <i className='bx bx-plus'></i>}
                                    {showDescription && <i className='bx bx-minus'></i>}
                                </div>
                                <p>{showDescription && characters[currentIndex].duties}</p>
                            </div>
                        </div>
                    </div>



                </section>
            }
        </>
    );
}

export default Tab
