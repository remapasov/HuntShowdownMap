import React, { useEffect, useState } from "react";
import { ImageOverlay, MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { divIcon, DomEvent, CRS, Icon, Point } from 'leaflet';

import { traitImg, toolboxImg, cashImg } from './constants';

const position = [0, 0];
const bounds = [[-4000, -4000], [4000, 4000]];

const setIcon = (iconUrl) => {
  return new Icon({
    iconUrl: iconUrl,
    iconSize: new Point(30, 30),
    className: 'leaflet-div-icon',
    interactive: false,
  });
}

export const Map = (props) => {

 /* Tempopal - need for markers position */
 const MapEvents = () => {
    useMapEvents({
      click(e) {
        console.log(`Position: [${e.latlng.lat}, ${e.latlng.lng}]`);
      },
    });
    return false;
  };

  return (
    <MapContainer
      className='hunt-map'
      center={position}
      zoom={-3}
      minZoom={-5}
      maxZoom={3}
      scrollWheelZoom={true}
      crs={CRS.Simple}
      zoomDelta={0.5}
      attributionControl={false}
      maxBounds={bounds}
      doubleClickZoom={false}
    >
      <MapEvents />
      <ImageOverlay
        url={props.mapImage}
        bounds={bounds}
        opacity={1}
        zIndex={10}
      />
      {props.filters.toolbox && toolboxImg[props.mapType].map((item, index) => {
        return (
          <Marker
            position={item.position}
            icon={setIcon(toolboxImg.icon)}
            key={index}
          >
            <Popup
              closeOnClick={true}
              closeButton={false}
            >
              <img className='popup-img' src={item.mapImage}/>
            </Popup>
          </Marker>
        )
      })}
      {props.filters.trait && traitImg[props.mapType].map((item, index) => {
        return (
          <Marker
            position={item.position}
            icon={setIcon(traitImg.icon)}
            key={index}
          >
            <Popup
              closeOnClick={true}
              closeButton={false}
            >
              <img className='popup-img' src={item.mapImage}/>
            </Popup>
          </Marker>
        )
      })}
      {props.filters.cash && cashImg[props.mapType].map((item, index) => {
        return (
          <Marker
            position={item.position}
            icon={setIcon(cashImg.icon)}
            key={index}
          >
            <Popup
              closeOnClick={true}
              closeButton={false}
            >
              <img className='popup-img' src={item.mapImage}/>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  );
}