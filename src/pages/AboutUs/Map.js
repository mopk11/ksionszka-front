import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

function Map({ position, markerInfo, attribute }) {
  return (
    <MapContainer center={position} zoom={20} scrollWheelZoom={true}>
      <TileLayer
        attribution={attribute}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{markerInfo}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
