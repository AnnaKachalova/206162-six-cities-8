import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { City } from '../../types/offer';
import { Offers, Offer } from '../../types/offer';
import { MapIcon } from '../../const';
import { Icon, Marker } from 'leaflet';

type MapProps = {
  city: City;
  offers: Offers;
  selectedPoint?: Offer | undefined;
  className:string;
};

function Map({ city, offers, selectedPoint, className }: MapProps): JSX.Element {
  const mapRef = useRef(document.createElement('div'));
  const map = useMap(mapRef, city);
  const defaultIcon = new Icon({
    iconUrl: MapIcon.Default,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  const activeIcon = new Icon({
    iconUrl: MapIcon.Active,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.city.location;
        const isActive = selectedPoint !== undefined && offer.id === selectedPoint.id;
        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });
        marker
          .setIcon(isActive ? activeIcon : defaultIcon)
          .addTo(map);
      });
    }
  }, [map, selectedPoint, city]);

  return (
    <section className={`${className}__map map`} ref={mapRef}>
    </section>
  );
}

export default Map;
