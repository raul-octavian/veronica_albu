import supabase from '../supabase';
import { Client } from '../types/db/dbTypes';

export const db = {
  clients: () => supabase.from<'clients', Client[]>('clients'),
};
