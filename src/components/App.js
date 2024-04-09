import React, { useEffect, useState } from 'react';
import { Select, Switch } from 'antd';
import { Map } from './Map.js';

import '../styles/App.scss';
import { constants, dictionary, initialFilterState } from './constants';

import toolBox from '../images/toolbox_img_cr.png';
import trait from '../images/trait_cr.png';
import cash from '../images/cash_cr.png';

const App = () => {
  const initialLang = localStorage.getItem('huntMapLang');
  if (!initialLang) {
    localStorage.setItem('huntMapLang', 'en');
  }

  const [lang, setLang] = useState(initialLang || 'en');
  const [mapImage, setMapImage] = useState(dictionary[lang].maps.stillwater);
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

  useEffect(() => {
    setMapImage(dictionary[lang].maps[mapType]);
  }, [lang]);

  const onLangSelect = (value) => {
    localStorage.setItem('huntMapLang', value);
    setLang(value);
  }

  return (
    <>
      <header>
        <div className='header'>Hunt: Showdown</div>
        <div className='lang-option'>
          <div className='lang-title'>{dictionary[lang].language}: </div>
          <Select
            onChange={onLangSelect}
            options={
              [
                { value: 'en', label: <span>En</span> },
                { value: 'ru', label: <span>Ru</span> }
              ]
            }
            defaultValue={lang}
            style={{
              width: 120,
            }}
          />
        </div>
      </header>
      <main>
        <div className='map-field'>
          <div className='fog' />
          <div className='header-buttons'>
            <button
              className={`map-button ${mapType == constants.stillwater && 'active'}`}
              type='button'
              onClick={(e) => buttonMapClick(dictionary[lang].maps.stillwater, constants.stillwater)}
            >
              {dictionary[lang].stillwater}
            </button>
            <button
              className={`map-button ${mapType == constants.lawson && 'active'}`}
              type='button'
              onClick={(e) => buttonMapClick(dictionary[lang].maps.lawson, constants.lawson)}
            >
              {dictionary[lang].lawson}
            </button>
            <button
              className={`map-button ${mapType == constants.desalle && 'active'}`}
              type='button'
              onClick={(e) => buttonMapClick(dictionary[lang].maps.desalle, constants.desalle)}
            >
              {dictionary[lang].desalle}
            </button>
          </div>
          <div className='map-filters'>
            <div className={`map-filters-item ${filters.toolbox && 'active'}`} onClick={(e) => filterItemClick('toolbox')}>
              <div className='filter'>
                <img className='filter-img' src={toolBox} />
                <div className='filter-name'>{dictionary[lang].toolbox}</div>
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
                <div className='filter-name'>{dictionary[lang].trait}</div>
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
                <div className='filter-name'>{dictionary[lang].cash}</div>
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
