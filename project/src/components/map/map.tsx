import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { City } from '../../types/offer';
import { Offers, Offer } from '../../types/offer';
import { MapIcon } from '../../const';

type MapProps = {
  city: City;
  offers: Offers;
  selectedPoint?: Offer | undefined;
  className:string;
};

function Map({ city, offers, selectedPoint, className }: MapProps): JSX.Element {
  const mapRef = useRef(document.createElement('div'));
  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon({
    iconUrl: MapIcon.Default,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  const activeIcon = leaflet.icon({
    iconUrl: MapIcon.Active,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;
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
  }, [map, selectedPoint, city, activeIcon, defaultIcon, offers]);

  return (
    <section className={`${className}__map map`} ref={mapRef}>
    </section>
  );
}

export default Map;
