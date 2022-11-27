import { Database } from '../databaseSchema';

export type Tables = Database['public']['Tables'];
export type Views = Database['public']['Views'];

export type Service = Tables['services']['Row'];
export type Client = Tables['clients']['Row'];
export type Basket = Tables['basket']['Row'];
export type BasketView = Views['basketview']['Row'];
