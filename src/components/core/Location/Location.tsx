import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { Theme } from '../../../redux/slices/themeSlice';
import { RootState } from '../../../redux/store';

const containerStyle = {
  width: '100vw',
  height: '32rem',
};

const center = {
  lat: 41.6532,
  lng: -83.5305,
};

const Location = () => {
  const { darkMode } = useSelector((state: RootState) => state.themeReducer);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={{
          styles: [{ stylers: [{ invert_lightness: darkMode }] }],
        }}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Location;
