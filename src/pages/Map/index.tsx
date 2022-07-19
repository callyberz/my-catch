import React from 'react';
import Map from 'react-map-gl';
import { enviroment } from '../../environment/env';
// import 'mapbox-gl/dist/mapbox-gl.css';

export const MapComp = (props: any) => {
  console.log(enviroment.mapBoxToken);
  return (
    <Map
      mapboxAccessToken={enviroment.mapBoxToken}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};
