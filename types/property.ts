export type Property = {
  id: number;
  images: string[];
  rentLow: number;
  rentHigh: number;
  bedroomLow: number;
  bedroomHigh: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  tags: string[];
};

export type DocumentProperty = {
  id: number;
  title: string;
  date: string;
  time: string;
  pages: string[];
};
