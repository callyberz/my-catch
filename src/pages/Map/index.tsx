import Map, { MapboxEvent, Marker, NavigationControl } from 'react-map-gl';
import Pin from '../../assets/Pin';
import GeocoderControl from '../../components/GeocoderControl';
import { MAPBOX_STYLES } from '../../constants/constant';
import { enviroment } from '../../environment/env';

const geoJsonData = [
  {
    longitude: 114.1694,
    latitude: 22.3193
  },
  {
    longitude: 114.1694,
    latitude: 22.4193
  }
];

export const MapComp = (props: any) => {
  const { mapBoxToken } = enviroment;
  const markerOnClick = (event: MapboxEvent<MouseEvent>) => {
    console.log('clicked');
  };

  return (
    <Map
      mapboxAccessToken={mapBoxToken}
      initialViewState={{
        latitude: 22.3193,
        longitude: 114.1694,
        zoom: 10
      }}
      style={{ width: 800, height: 600 }}
      mapStyle={MAPBOX_STYLES.outdoors}
    >
      {geoJsonData.map((item) => (
        <Marker
          key={`${item.latitude}-${item.longitude}`}
          latitude={item.latitude}
          longitude={item.longitude}
          anchor="bottom"
          onClick={markerOnClick}
        >
          <Pin size={20} />
        </Marker>
      ))}

      <GeocoderControl mapboxAccessToken={mapBoxToken} />

      <NavigationControl />
    </Map>
  );
};
