export type Service = {
  id: string;
  name: string;
  duration: number;
  price: number;
  category: string;
  type: number | string;
  compatible?: string[];
  extras?: string[];
};

export type BasketService = Service & {
  addedFor?: string;
};
