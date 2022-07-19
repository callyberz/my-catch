import Map from 'react-map-gl';
import { enviroment } from '../../environment/env';

export const MapComp = (props: any) => {
  return (
    <Map
      mapboxAccessToken={enviroment.mapBoxToken}
      initialViewState={{
        latitude: 22.3193,
        longitude: 114.1694,
        zoom: 10
      }}
      style={{ width: 1200, height: 800 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};
