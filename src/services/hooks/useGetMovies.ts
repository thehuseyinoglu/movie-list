import axios from "axios";
import useSWRMutation from "swr/mutation";
import { GetMovieResponse } from "../types/get-movie-response";
import { GetMovieParams } from "../types/get-movie-params";

export default function useGetMovies(params: GetMovieParams) {
  const sendRequest = async (url: string) => {
    const response = await axios.get(url, {
      params: params,
    });

    return response.data;
  };
  const { data, trigger, isMutating } = useSWRMutation<
    GetMovieResponse,
    any,
    any,
    any
  >("http://www.omdbapi.com/?apikey=a1c44614", sendRequest);

  return { data, trigger, isMutating };
}
