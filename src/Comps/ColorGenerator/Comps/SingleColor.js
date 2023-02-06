import React, { useState, useEffect } from 'react';
import './SingleColor.css'


const SingleColor = (props) => {

  const [alert, setAlert] = useState(false);
  const [colorSelected, setColorSelected] = useState(false)

  const { rgb, weight, hex } = props.color;
  const { index } = props;

  const bgC = rgb.join(',');

  const bgColor = {
    style:
    {
      backgroundColor: `rgb(${bgC})`,
    }
  };

  const handleColorClick = () => {
    setAlert(true)
    setColorSelected(true)
    navigator.clipboard.writeText(`#${hex}`); // copy text to clipboard
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
      setColorSelected(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])



  return (

    <article className={`single-color-container ${index > 10 ? 'color-light' : null} ${colorSelected ? 'color-active' : 'color-inactive'}`} {...bgColor} onClick={handleColorClick}>
      <div>
        <p className='color-weight'>{weight}%</p>
        <p className='color-hex'>{`#${hex}`}</p>
      </div>
      <div className={`hex-copy-container ${alert && 'copied'}`}>
        <p className='hex-copy'>Copied to clipboard </p>
      </div>
    </article>

  )
}

export default SingleColor
