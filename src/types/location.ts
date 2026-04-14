export type Location = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
  ramp: boolean;
  stairs: boolean;
  elevator: boolean;
  accessible_toilet: boolean;
  accessible_parking: boolean;
  access_level: "good" | "partial" | "difficult";
  notes: string | null;
  created_at: string;
};
