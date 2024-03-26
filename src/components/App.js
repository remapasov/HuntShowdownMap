import React, { useState } from 'react';
import { Map } from './Map.js';

import '../styles/App.scss';
import { constants, initialFilterState } from './constants';
import stillwater from '../images/Stillwater.png';
import lawson from '../images/Lawson.png';
import desalle from '../images/Desalle.png';

import toolBox from '../images/toolbox_img.png';
import trait from '../images/levering_cr.jpg';

const App = () => {
  const [mapImage, setMapImage] = useState(stillwater);
  const [mapType, setMapType] = useState(constants.stillwater);
  const [filters, setFilters] = useState(initialFilterState);


  const buttonMapClick = (mapImage, mapType) => {
    setMapImage(mapImage);
    setMapType(mapType);
  };

  const filterItemClick = (filter) => {
    console.log(filter);
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  return (
    <>
      <header>
        <div className='header'>Hunt Showdown Map</div>
      </header>
      <main>
        <div className='map-filters'>
          <div className='map-filters-item' onClick={(e) => filterItemClick('toolbox')}>
            <img className={`filter-img ${filters.toolbox && 'active'}`} src={toolBox} />
            <div className='filter-name'>Tool Box</div>
          </div>
          <div className='map-filters-item' onClick={(e) => filterItemClick('trait')}>
            <img className={`filter-img ${filters.trait && 'active'}`} src={trait} />
            <div className='filter-name'>Tool Box</div>
          </div>
        </div>
        <div className='map-field'>
          <div className='header-buttons'>
            <button
              className={`map-button ${mapType == constants.stillwater && 'active'}`}
              type='button'
              onClick={(e) => buttonMapClick(stillwater, constants.stillwater)}
            >
              Stillwater Bayou
            </button>
            <button
              className={`map-button ${mapType == constants.lawson && 'active'}`}
              type='button'
              onClick={(e) => buttonMapClick(lawson, constants.lawson)}
            >
              Lawson Delta
            </button>
            <button
              className={`map-button ${mapType == constants.desalle && 'active'}`}
              type='button'
              onClick={(e) => buttonMapClick(desalle, constants.desalle)}
            >
              DeSalle
            </button>
          </div>
          <Map mapImage={mapImage} mapType={mapType} filters={filters}/>
        </div>
      </main>
    </>
  );
}

export default App;
