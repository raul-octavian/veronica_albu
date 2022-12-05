import { PostgrestError } from '@supabase/supabase-js';
import { useState } from 'react';
import supabase from '../../supabase';
import { Service } from '../../types/db/dbTypes';

const useGetServices = () => {
  const [services, setServices] = useState<Service[] | null>(null);
  const [fetchError, setFetchError] = useState<PostgrestError | null>(null);

  const fetchServices = async () => {
    const { data, error } = await supabase.from('services').select('*');

    if (error) {
      setFetchError(error);
      setServices(null);
    }

    if (data) {
      setServices(data);
      setFetchError(null);
    }
  };

  return { services, fetchError, fetchServices };
};

export default useGetServices;
