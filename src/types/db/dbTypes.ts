import { Database } from '../databaseSchema';

export type Tables = Database['public']['Tables'];

export type Service = Tables['services']['Row'];
