import { Session } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import { SetSession } from '../types/setTypes/setTypes';

type SessionProviderProp = {
  session: Session;
  setSession: SetSession;
};

const SessionContext = createContext<SessionProviderProp>(
  {} as SessionProviderProp
);

export const useSessionContext = () => useContext(SessionContext);

export default SessionContext;
