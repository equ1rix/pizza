export const mock = () => {};

export interface Filter {
  label: string;
  id: number;
}

export const doughTypeFilters: Filter[] = [
  { label: "thin", id: 1 },
  { label: "traditional", id: 2 },
];

export const pizzaSizeFilters: Filter[] = [
  { label: "26 cm", id: 1 },
  { label: "30 cm", id: 2 },
  { label: "34 cm", id: 3 },
];
