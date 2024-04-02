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

export const mockData = [
  {
    idCart: 10301230,
    id: 2,
    label: "4 CHEEEESE",
    src: "https://previews.123rf.com/images/smspsy/smspsy1806/smspsy180600416/104188387-delicious-italian-four-cheese-pizza-isolated-on-white-background-top-view-flat-lay.jpg",
    dough: "thin",
    size: 12,
    price: 10.99,
    quantity: 2,
    totalPrice: 10.99 * 2,
  },
];
