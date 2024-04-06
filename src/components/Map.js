import React, { useEffect, useState } from "react";
import { ImageOverlay, MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { divIcon, DomEvent, CRS, Icon, Point } from 'leaflet';

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

 /* Tempopal - need for markers position */
 const MapEvents = () => {
    useMapEvents({
      click(e) {
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
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