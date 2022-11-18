import { createClient } from '@supabase/supabase-js';

console.log(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_ANON_KEY);

const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);

export default client;
