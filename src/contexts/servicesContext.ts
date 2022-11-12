import { createContext, FC, ProviderProps, useContext, useState } from 'react';
import { ChildrenProp } from '../types/children';
import { Service } from '../types/service';

export const mockServices: Service[] = [
  {
    id: '001',
    serviceName: 'manichiura simpla',
    duration: 90,
    price: 150,
    category: 'manichiura',
    type: 1,
    extras: ['003'],
    compatible: ['004'],
  },
  {
    id: '002',
    serviceName: 'manichiura cu gel',
    duration: 120,
    price: 250,
    category: 'manichiura',
    type: 1,
    extras: ['003'],
    compatible: ['004'],
  },
  {
    id: '004',
    serviceName: 'pedichiura',
    duration: 120,
    price: 250,
    category: 'pedichiura',
    type: 1,
    extras: ['003'],
  },
  {
    id: '003',
    serviceName: 'masaj degete',
    duration: 15,
    price: 30,
    category: 'manichiura',
    type: 2,
    extras: [],
  },
];

export const ServicesContext = createContext<Service[]>([] as Service[]);
export const useServiceContext = () => useContext(ServicesContext);
