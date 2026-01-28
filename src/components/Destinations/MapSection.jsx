import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapSection() {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h3 className="fw-bold mb-5">Explore Destinations on Map</h3>

        <div
          className="shadow-lg rounded-2 overflow-hidden"
          style={{ height: "450px" }}
        >
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[-8.3405, 115.092]}>
              <Popup>Bali, Indonesia</Popup>
            </Marker>

            <Marker position={[25.2048, 55.2708]}>
              <Popup>Dubai, UAE</Popup>
            </Marker>

            <Marker position={[48.8566, 2.3522]}>
              <Popup>Paris, France</Popup>
            </Marker>

            <Marker position={[51.5074, -0.1278]}>
              <Popup>London, UK</Popup>
            </Marker>

            <Marker position={[40.7128, -74.006]}>
              <Popup>New York, USA</Popup>
            </Marker>

            <Marker position={[36.3932, 25.4615]}>
              <Popup>Santorini, Greece</Popup>
            </Marker>

            <Marker position={[35.6762, 139.6503]}>
              <Popup>Tokyo, Japan</Popup>
            </Marker>

            <Marker position={[3.2028, 73.2207]}>
              <Popup>Maldives</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
