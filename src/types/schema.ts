export interface Planet {
  id?: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export interface PlanetsResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export interface PlanetsPage {
  id: number;
  content: PlanetsResponse;
}

export type View = 'table' | 'grid';

export type Color = 'primary' | 'secondary' | 'tertiary' | 'dark' | 'medium' | 'light';