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
  _id?: string;
  name: string;
  location: string;
}

// Interface for a district and its resorts
export interface DistrictResorts {
  district: string;
  photo: string;
  resorts: Resort[];
  region_local: string;
}

// Interface for regions like "North", "South", etc.
export interface ResortsData {
  title: string;
  local: string;
  data: DistrictResorts[];
}

export interface Experience {
  id: number;
  title: string;
  image: string;
}

export interface AllResortDataProps {
  _id: string;
  name: string;
  location: string;
  photo: string;
  district: string;
  region: string;
  region_local: string;
}
