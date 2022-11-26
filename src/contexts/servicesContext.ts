import { createContext, useContext } from 'react';
import { Service } from '../types/db/dbTypes';

export const ServicesContext = createContext<Service[] | null>([] as Service[]);
export const useServiceContext = () => useContext(ServicesContext);
