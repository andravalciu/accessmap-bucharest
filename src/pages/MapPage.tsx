import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../utils/fixLeafletIcons";

function MapPage() {
  const bucharestPosition: [number, number] = [44.4268, 26.1025];

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

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-[70vh] w-full">
            <MapContainer
              center={bucharestPosition}
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={bucharestPosition}>
                <Popup>
                  <div>
                    <h2 className="font-semibold">Bucharest Center</h2>
                    <p className="text-sm text-slate-600">
                      Demo marker for AccessMap Bucharest.
                    </p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MapPage;
