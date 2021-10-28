import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {City} from '../../types/map';
import {Offers} from '../../types/offer';
import {URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city:City;
  offers: Offers
};

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map  = useMap(mapRef, city);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  /*const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });*/

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const{latitude, longitude} = offer.city.location;
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div className='cities__right-section'  ref={mapRef}>
      <section className='cities__map map'></section>
    </div>
  );
}

export default Map;
