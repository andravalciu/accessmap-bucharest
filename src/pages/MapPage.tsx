import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../utils/fixLeafletIcons";
import MapController from "../components/MapController";

import { supabase } from "../lib/supabase";
import type { Location } from "../types/location";

function MapPage() {
  const bucharestPosition: [number, number] = [44.4268, 26.1025];
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<
    [number, number] | null
  >(null);

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
    <main className="h-[calc(100vh-73px)] bg-slate-50">
      <div className="grid h-full grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-4 border-r border-slate-200 bg-white p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-slate-900">
            Accessibility Map
          </h1>

          <p className="mt-2 text-slate-600">
            Browse accessible places in Bucharest.
          </p>

          <div className="mt-8 space-y-4">
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() =>
                  setSelectedPosition([location.latitude, location.longitude])
                }
                className="cursor-pointer rounded-2xl border border-slate-200 p-4 shadow-sm transition hover:border-emerald-300"
              >
                <h2 className="text-lg font-semibold">{location.name}</h2>

                <p className="mt-1 text-sm text-slate-500">
                  {location.address}
                </p>

                <p className="mt-3 text-sm">
                  Accessibility:{" "}
                  <span className="font-medium capitalize">
                    {location.access_level}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* Map */}
        <section className="col-span-8 h-full">
          <MapContainer
            center={bucharestPosition}
            zoom={12}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapController selectedPosition={selectedPosition} />

            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.latitude, location.longitude]}
              >
                <Popup>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">{location.name}</h2>

                    <p>{location.address}</p>

                    <p>Accessibility: {location.access_level}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </div>
    </main>
  );
}

export default MapPage;
