export interface CurrentSectionProps {
  id: number;
  name: string;
  image: string;
  heading: string;
  description: string;
}

export interface SelectedProps {
  id: number;
  name: string;
}

// Interface for a single resort
export interface Resort {
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
