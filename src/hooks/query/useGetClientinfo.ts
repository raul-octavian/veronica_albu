import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useSessionContext } from "../../contexts/sessionContext";
import supabase from "../../supabase";
import { Client } from "../../types/db/dbTypes";

const useGetClientInfo = () => {
  const { session } = useSessionContext();
  const [error, setError] = useState<PostgrestError | null>();
  const [client, setClient] = useState<Partial<Client>>();
  const getClientInfo = async () => {
    if (session) {
      let { data: client, error } = await supabase
        .from("clients")
        .select("first_name, last_name, email, phone")
        .eq("id", session?.user.id)
        .single();

      error && setError(error);

      client && setClient(client);
    }
  };

  useEffect(() => {
    if (session.user) {
      getClientInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return { error, client };
};

export default useGetClientInfo;
