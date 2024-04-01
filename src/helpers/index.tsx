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
  { label: "10 in", id: 10 },
  { label: "12 in", id: 12 },
  { label: "14 in", id: 14 },
];
