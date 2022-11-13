export type Service = {
  id: string;
  serviceName: string;
  duration: number | string;
  price: number | string;
  category: string;
  type: number | string;
  compatible?: string[];
  extras?: string[];
};

export type BasketService = Service & {
  addedFor?: string;
};
