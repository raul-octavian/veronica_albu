import supabase from '../supabase';
import { Client, Service } from '../types/db/dbTypes';

export const db = {
  clients: () => supabase.from<'clients', Client[]>('clients'),
  services: () => supabase.from<'services', Service[]>('services'),
};
