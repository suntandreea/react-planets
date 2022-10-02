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

export interface Pagination {
  page: number;
  content: Planet[];
}

export type View = 'table' | 'grid';
export type Color = 'primary' | 'secondary' | 'tertiary' | 'dark' | 'medium' | 'light';
export type Field = 'name' | 'diameter' | 'climate' | 'population' | 'terrain' | 'off';
export type SortDirection = 'up' | 'down' | 'off';
export type FilterType = 'search' | 'list' | 'slide';
export type Results =  '10' | '30' | 'all';

export interface SortCriteria {
  field: Field;
  direction: SortDirection;
}

export interface FilterCriteria {
  field: Field;
  type?: FilterType;
  criteria?: string | string[] | number[];
}