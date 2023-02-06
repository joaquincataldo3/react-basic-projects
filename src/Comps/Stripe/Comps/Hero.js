import React from 'react'
import { useGlobalContext } from './context';
import BackToHome from '../../BackToHome/BackToHome'

const Hero = () => {

  const { closeSubmenu } = useGlobalContext();

  return (
    <main onMouseOver={closeSubmenu} className='content-container'>
      <BackToHome font='Barlow Semi Condensed, sans-serif'/>
      <section className='hero-content-wrapper'>
        <article className='more-articles'>
          <h2 className='default-content-title'>Content</h2>
        </article>
      <article className='more-articles'>
        <h2 className='default-content-title'>Content</h2>
      </article>
      <article className='more-articles'>
        <h2 className='default-content-title'>Content</h2>
      </article>
      </section>
    </main>
  )

}

export default Hero
