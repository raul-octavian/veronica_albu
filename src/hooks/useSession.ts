import { Session } from '@supabase/supabase-js';
import { useState } from 'react';

const useSession = () => {
  const [session, setSession] = useState<Session>({} as Session);

  return { session, setSession };
};

export default useSession;
