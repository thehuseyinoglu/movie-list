export interface GetMovieResponse {
  Response: string;
  totalResults: string;
  Search: GetMovieResponseSearch[];
}

export interface GetMovieResponseSearch {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
