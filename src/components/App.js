import React, { Component } from "react";
import { ImageOverlay, MapContainer, Marker, Popup, TileLayer, useMap, LayerGroup, LayersControl, FeatureGroup, Circle, Rectangle } from 'react-leaflet';
import {CRS} from 'leaflet';

import '../styles/App.scss';
import MyImage from '../images/map1.png';

const position = [50.5, 30.5];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const bounds = [[-220, 0], [600, 800]];

const App = () => {
    return (
      <MapContainer center={position} zoom={0} minZoom={-4} scrollWheelZoom={true} crs={CRS.Simple}>
        <ImageOverlay
          url={MyImage}
          bounds={bounds}
          opacity={1}
          zIndex={10}
        />
      </MapContainer>
    );
}

export default App;