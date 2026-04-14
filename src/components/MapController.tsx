import { useMap } from "react-leaflet";
import { useEffect } from "react";

type MapControllerProps = {
  selectedPosition: [number, number] | null;
};

function MapController({ selectedPosition }: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (selectedPosition) {
      map.flyTo(selectedPosition, 15, {
        duration: 1.5,
      });
    }
  }, [selectedPosition, map]);

  return null;
}

export default MapController;
