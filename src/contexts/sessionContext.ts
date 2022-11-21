import { Session } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

type SessionProviderProp = {
  session: Session;
  setSession: React.Dispatch<React.SetStateAction<Session>>;
};

const SessionContext = createContext<SessionProviderProp>(
  {} as SessionProviderProp
);

export const useSessionContext = () => useContext(SessionContext);

export default SessionContext;
