import React, { useState } from 'react';
import data from './data'
import BackToHome from '../BackToHome/BackToHome'
import './Slider.css';


function Slider() {

  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  const handleRightArrowClick = () => {
    if (index < people.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const handleLeftArrowClick = () => {
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (

    <main className='slider-main-content-container'>
      <BackToHome font='Inter, sans-serif' />
      <h1 className='slider-main-title'><span className='slider-span'>/  </span><span className='slider-span'>C</span>ompany <span className='slider-span'>S</span>taff</h1>
      <section className="slider-container">
        <div className='slider'>
          <div className='left-arrow-container'>
            <i className='bx bx-chevron-left' onClick={handleLeftArrowClick}></i>
          </div>
          {
            people.map((person, personIndex) => {
              let position = 'next-slide';
              if (personIndex === index) {
                position = 'active-slide'
              }
              if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                position = 'prev-slide'
              }
              return (
                <article className={`person-article ${position}`} key={person.name}>
                  <div className='person-img-container'>
                    <img src={person.image} alt="" />
                  </div>
                  <div className='person-info-container'>
                    <h2 className='person-name'>{person.name}</h2>
                    <h4 className='person-title'>{person.title}</h4>
                    <p className='person-quote'>{person.quote}</p>
                  </div>
                </article>
              )

            })
          }
          <div className='right-arrow-container'>
            <i className='bx bx-chevron-right' onClick={handleRightArrowClick}></i>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Slider;