import React, { useEffect, useState } from 'react';
import Tab from './Comps/Tab/Tab';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import BackToHome from '../BackToHome/BackToHome';
import './TabContainer.css';


const url = 'https://course-api.com/react-tabs-project'

function TabContainer() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      { loading &&<LoadingSpinner /> }

      <BackToHome font='Kanit, sans-serif' />

      <Tab characters={characters} loading={loading}/>
    </>
  );
}

export default TabContainer;
