import { createClient } from '@supabase/supabase-js';
import { Database } from './types/databaseSchema';

const supabase = createClient<Database>(
  process.env.REACT_APP_SUPABASE_URL || '',
  process.env.REACT_APP_ANON_KEY || ''
);

export default supabase;
