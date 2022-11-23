import supabase from '../supabase';
import { Service } from '../types/db/dbTypes';

const useGetServices = async () => {
  let { data: services, error } = await supabase
    .from<'services', Service[]>('services')
    .select('*');

  return { services, error };
};

export default useGetServices;
