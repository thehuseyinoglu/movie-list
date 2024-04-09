import axios from "axios";
import useSWR from "swr";
import { GetDetailById } from "../types/get-detail-by-id";

export default function useGetDetailById(id: string) {
  const fetcher = async (url: string) => {
    const response = await axios.get(url, {
      params: {
        i: id,
        apikey:'a1c44614'
      },
    });

    return response.data;
  };

  const { data, error, isLoading, mutate,isValidating } = useSWR<GetDetailById,any,any,any>(
    id ? ["http://www.omdbapi.com"] : null,
    fetcher
  );

  return { data, error, isLoading, mutate,isValidating };
}
