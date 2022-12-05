import { Database } from '../databaseSchema';

export type Tables = Database['public']['Tables'];
export type Views = Database['public']['Views'];

export type Service = Tables['services']['Row'];
export type Client = Tables['clients']['Row'];
export type Basket = Tables['basket']['Row'];
export type Order = Tables['orders']['Row'];
export type BasketHasService = Tables['basket_has_services']['Row'];
export type BasketInsertReturn = Tables['basket']['Insert'];
export type BasketView = Views['basketview']['Row'];
export type OrderStatus = Tables['order_status']['Row'];

export type OrderServices = Pick<
  BasketView,
  'name' | 'duration' | 'price' | 'service_id'
>;
