import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement>, city: City): Map | null  {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (map === null) {
      const{zoom, latitude, longitude} = city.location;
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      instance.addLayer(layer);

      setMap(instance);
    }else {
      const{zoom, latitude, longitude} = city.location;
      map.flyTo([latitude, longitude], zoom);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
