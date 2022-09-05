import { EventApi } from '../api';
import Geohash from './hash';

export function getLatLong() {
  navigator.geolocation.getCurrentPosition(Position => {
    const hash = Geohash.encode(
      Position.coords.latitude,
      Position.coords.longitude,
      5
    );
    EventApi.setGeoPoint(hash);
  });
}

