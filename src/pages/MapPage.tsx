import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../utils/fixLeafletIcons";

import { supabase } from "../lib/supabase";
import type { Location } from "../types/location";

function MapPage() {
  const bucharestPosition: [number, number] = [44.4268, 26.1025];
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("locations")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setLocations(data ?? []);
      }

      setLoading(false);
    };

    fetchLocations();
  }, []);

  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-50 px-6 py-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Accessibility Map
          </h1>
          <p className="mt-2 text-slate-600">
            Explore accessibility-focused locations across Bucharest.
          </p>
        </div>

        {loading && (
          <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-600">
            Loading locations...
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
            Failed to load locations: {error}
          </div>
        )}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-[70vh] w-full">
            <MapContainer
              center={bucharestPosition}
              zoom={12}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                >
                  <Popup>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">{location.name}</h2>
                      <p className="text-sm text-slate-600">
                        {location.address}
                      </p>
                      <p>Category: {location.category}</p>
                      <p>Ramp: {location.ramp ? "Yes" : "No"}</p>
                      <p>Stairs: {location.stairs ? "Yes" : "No"}</p>
                      <p>Elevator: {location.elevator ? "Yes" : "No"}</p>
                      <p>
                        Accessible toilet:{" "}
                        {location.accessible_toilet ? "Yes" : "No"}
                      </p>
                      <p>
                        Accessible parking:{" "}
                        {location.accessible_parking ? "Yes" : "No"}
                      </p>
                      <p className="font-medium">
                        Accessibility: {location.access_level}
                      </p>
                      {location.notes && (
                        <p className="text-sm text-slate-600">
                          {location.notes}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MapPage;
