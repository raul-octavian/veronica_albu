import { PostgrestError, Session } from '@supabase/supabase-js';
import { BasketHasService, BasketView } from '../db/dbTypes';

export type SetBasket = React.Dispatch<
  React.SetStateAction<BasketView[] | null>
>;

export type SetNewService = React.Dispatch<
  React.SetStateAction<BasketHasService>
>;

export type SetError = React.Dispatch<
  React.SetStateAction<PostgrestError | null>
>;
export type SetSession = React.Dispatch<React.SetStateAction<Session>>;
