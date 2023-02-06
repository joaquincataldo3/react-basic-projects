
import { useState } from 'react';
import data from './data'
import { v4 as uuid } from 'uuid';
import BackToHome from '../BackToHome/BackToHome'
import './LoremIpsumGenerator.css'

function LoremIpsumGenerator() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false)


  const handleCount = (e) => {
    setCount(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let countParsed = parseInt(count);
    if (count <= 0) {
      setError('Min paragraph is 1');
      setText([])
    }
    else if (count > data.length - 1) {
      setText(data.slice(0, data.length - 1))
      setError(`Max paragraph is ${data.length - 1}`)
    } else {
      setError('');
      setText(data.slice(0, countParsed))
    }
  }

  const handleCopyText = () => {
    setAlert(true)
    navigator.clipboard.writeText(`#${text}`)
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout) 
  }


  return (
    <main className='loremipsum-main-content-container'>

      <BackToHome font='Lato, sans-serif' />

      <div className='intro-container'>
        <h2 className='loremipsum-title'>Tired of boring <span className='loremipsum-highlighted-word'>Lorem Ipsum</span>?</h2>
        <h3 className='loremipsum-title'>Generate up to 8 paragraphs !</h3>
      </div>
      <form onSubmit={handleFormSubmit} className='loremipsum-form'>

        <input className='loremipsum-input' type="number" name='count' onChange={handleCount} value={count} />

        <button type='submit' className='loremipsum-form-btn'>Generate</button>
      </form>
      <p className='loremipsum-error'>{error}</p>
      {
        text.length > 0 &&
        <div className='p-icon-container'  onClick={handleCopyText}>
          <div className='icon-container'>

            <i class='bx bx-clipboard'></i>
            <p className={`${alert ? 'copy copy-active' : 'copy'}`}>Copied to clipboard</p>
          </div>
          <div>
            {
              text.map(text => {
                return <p key={uuid()}>{text}</p>
              })
            }
          </div>
        </div>
      }

    </main>
  );
}

export default LoremIpsumGenerator;
