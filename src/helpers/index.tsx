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
  { label: "10 in", id: 1 },
  { label: "12 cm", id: 2 },
  { label: "14 cm", id: 3 },
];
