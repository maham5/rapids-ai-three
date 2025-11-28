"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("leaflet-map");
    if (!mapDiv) return;

    // Create map
    const map = L.map("leaflet-map");

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom icons
    const sinesIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      iconSize: [35, 35],
      iconAnchor: [17, 35],
      popupAnchor: [0, -30],
    });

    const stPeteIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
      iconSize: [35, 35],
      iconAnchor: [17, 35],
      popupAnchor: [0, -30],
    });

    // Locations
    const locations: { lat: number; lng: number; name: string; icon: L.Icon }[] = [
      { lat: 33.647279, lng: 72.99987, name: "📍 SINES NUST (Islamabad)", icon: sinesIcon },
      { lat: 27.844646, lng: -82.640694, name: "📍 St. Petersburg Office", icon: stPeteIcon },
    ];

    // ✅ Deduplicate by coordinates (use globalThis.Map to avoid conflict)
    const uniqueLocations = Array.from(
      new globalThis.Map(
        locations.map((loc) => [loc.lat + "," + loc.lng, loc])
      ).values()
    );

    const bounds: [number, number][] = [];

    // Add markers
    uniqueLocations.forEach(({ lat, lng, name, icon }, index) => {
      const marker = L.marker([lat, lng], { icon }).addTo(map);
      marker.bindPopup(`<b>${name}</b>`);

      if (index === 0) {
        marker.openPopup();
      }

      bounds.push([lat, lng]);
    });

    // Fit to markers
    map.fitBounds(bounds, { padding: [80, 80] });
    map.once("zoomend", () => {
      map.setZoom(map.getZoom() - 1);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="leaflet-map" className="leaflet-container" />;
};

export default Map;
