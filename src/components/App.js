import React, { useState } from 'react';
import { Map } from './Map.js';

import '../styles/App.scss';
import stillwater from '../images/Stillwater.png';
import lawson from '../images/Lawson.png';
import desalle from '../images/Desalle.png';

const App = () => {
  const [map, setMap] = useState(stillwater);

  const buttonMapClick = (mapType, e) => {
    setMap(mapType);
  };


  return (
    <>
      <header>
        <div className='header'>Hunt Showdown Map</div>
      </header>
      <nav className='header-buttons'>
        <button
          className='map-button'
          type='button'
          onClick={(e) => buttonMapClick(stillwater)}
        >
          Stillwater Bayou
        </button>
        <button
          className='map-button'
          type='button'
          onClick={(e) => buttonMapClick(lawson)}
        >
          Lawson Delta
        </button>
        <button
          className='map-button'
          type='button'
          onClick={(e) => buttonMapClick(desalle)}
        >
          DeSalle
        </button>
      </nav>
      <Map map={map}/>
    </>
  );
}

export default App;
