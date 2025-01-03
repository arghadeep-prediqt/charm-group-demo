export interface CurrentSectionProps {
  name: string;
  image: string;
}

export interface SelectedProps {
  id: number;
  name: string;
}

// Interface for a single resort
interface Resort {
  name: string;
  location: string;
}

// Interface for a district and its resorts
export interface DistrictResorts {
  district: string;
  photo: string;
  resorts: Resort[];
}

// Interface for regions like "North", "South", etc.
export interface ResortsData {
  title: string;
  data: DistrictResorts[];
}
