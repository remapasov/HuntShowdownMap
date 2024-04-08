import React, { useState } from 'react';
import { Switch } from 'antd';
import { Map } from './Map.js';

import '../styles/App.scss';
import { constants, initialFilterState } from './constants';
import stillwater from '../images/Stillwater_origin.png';
import lawson from '../images/Lawson_origin.png';
import desalle from '../images/Desalle_origin.png';

import toolBox from '../images/toolbox_img_cr.png';
import trait from '../images/trait_cr.png';
import cash from '../images/cash_cr.png';

const App = () => {
  const [mapImage, setMapImage] = useState(stillwater);
  const [mapType, setMapType] = useState(constants.stillwater);
  const [filters, setFilters] = useState(initialFilterState);

  const buttonMapClick = (mapImage, mapType) => {
    setMapImage(mapImage);
    setMapType(mapType);
  };

  const filterItemClick = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  return (
    <>
      <header>
        <div className='header'>Hunt: Showdown</div>
      </header>
      <main>
        <div className='map-field'>
          <div className='fog' />
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
          <div className='map-filters'>
            <div className={`map-filters-item ${filters.toolbox && 'active'}`} onClick={(e) => filterItemClick('toolbox')}>
              <div className='filter'>
                <img className='filter-img' src={toolBox} />
                <div className='filter-name'>Tool Box</div>
              </div>
              <Switch
                className='filter-switch'
                size='small'
                checked={filters.toolbox}
                onChange={(e) => filterItemClick('toolbox')}
              />
            </div>
            <div className={`map-filters-item ${filters.trait && 'active'}`} onClick={(e) => filterItemClick('trait')}>
              <div className='filter'>
                <img className='filter-img' src={trait} />
                <div className='filter-name'>Trait</div>
              </div>
              <Switch
                className='filter-switch'
                size='small'
                checked={filters.trait}
                onChange={(e) => filterItemClick('toolbox')}
              />
            </div>
            <div className={`map-filters-item ${filters.cash && 'active'}`} onClick={(e) => filterItemClick('cash')}>
              <div className='filter'>
                <img className='filter-img' src={cash} />
                <div className='filter-name'>Cash</div>
              </div>
              <Switch
                className='filter-switch'
                size='small'
                checked={filters.cash}
                onChange={(e) => filterItemClick('cash')}
              />
            </div>
          </div>
          <Map mapImage={mapImage} mapType={mapType} filters={filters}/>
        </div>
      </main>
    </>
  );
}

export default App;
