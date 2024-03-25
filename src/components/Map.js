import React, { useEffect, useState } from "react";
import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import { DomEvent, CRS, Icon, Point } from 'leaflet';

import toolBox from '../images/toolbox_img.png';

const position = [0, 0];
const bounds = [[-4000, -4000], [4000, 4000]];

const icon = new Icon({
  iconUrl: toolBox,
  iconRetinaUrl: toolBox,
  iconSize: new Point(30, 30),
  className: 'leaflet-div-icon',
  interactive: false,
});

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
        url={props.map}
        bounds={bounds}
        opacity={1}
        zIndex={10}
      />
      <Marker
        position={[750, 160]}
        icon={icon}
        // eventHandlers={{ click: handleMarkerClick }}
      >
        <Popup
          closeOnClick={false}
          closeButton={false}
          // eventHandlers={{ click: handlePopupClick }}
        >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}