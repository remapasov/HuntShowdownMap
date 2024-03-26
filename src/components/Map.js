import React, { useEffect, useState } from "react";
import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import { DomEvent, CRS, Icon, Point } from 'leaflet';

import { traitImg, toolboxImg, } from './constants';

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

  return (
    <MapContainer
      className='hunt-map'
      center={position}
      zoom={-3}
      minZoom={-4}
      maxZoom={2}
      scrollWheelZoom={true}
      crs={CRS.Simple}
      // zoomSnap={0}
      zoomDelta={0.5}
      attributionControl={false}
      maxBounds={bounds}
      doubleClickZoom={false}
      // dragging={false}
    >
      <ImageOverlay
        url={props.mapImage}
        bounds={bounds}
        opacity={1}
        zIndex={10}
      />
      {props.filters.toolbox && toolboxImg[props.mapType].map((item) => {
        return (
          <Marker
            position={item.position}
            icon={setIcon(item.icon)}
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
      {props.filters.trait && traitImg[props.mapType].map((item) => {
        return (
          <Marker
            position={item.position}
            icon={setIcon(item.icon)}
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