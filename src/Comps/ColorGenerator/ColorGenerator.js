
import Values from 'values.js';
import { useEffect, useState } from 'react';
import SingleColor from './Comps/SingleColor';
import BackToHome from '../BackToHome/BackToHome'
import './ColorGenerator.css'

function ColorGenerator() {

  const [color, setColor] = useState('#e44b8d');
  const [error, setError] = useState('');
  const [list, setList] = useState([]);


  useEffect(() => {
    setIntroColor()
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);

    } catch (error) {
      setError(true)
    }
  }

  const setIntroColor = () => {
    let colors = new Values(color).all(10);
    setList(colors);
  }



  return (
    <section className="main-color-content-container">
      
      <BackToHome font='Josefin Sans, sans-serif' />

      <div className='form-container'>
        <h1 className='color-main-title'>Color Generator</h1>
        <form onSubmit={handleFormSubmit} className='generate-color-form'>
          <h4 className='color-subtitle'>Type a color in hex format</h4>
          <input type="text" value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`color-input ${error && 'error'}`} placeholder='#e44b8d' />
          {error && <p className='error-text'>The text must be a hex color</p>}
          <button className='generate-color-btn' type='submit'>Generate</button>
        </form>

      </div>
      <div className='list-container'>
        {
          list.map((color, i) => {
            return <SingleColor key={i} color={color} index={i} />
          })
        }
      </div>
    </section>

  );
}

export default ColorGenerator;
