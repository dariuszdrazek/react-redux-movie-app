import { getMoviesUrl, typeMapping } from '../../config';

export const FETCH_MOVIES = '[movies] Fetching movies';
export const FETCHED_MOVIES = '[movies] Fetched movies';
export const FETCHED_ERROR = '[movies] Fetched movies ERROR';

export const startFetching = () => {
     return {
          type: FETCH_MOVIES
     };
};

export const fetchedMovies = payload => {
     return {
          type: FETCHED_MOVIES,
          payload
     };
};

export const fetchedMoviesError = payload => {
     return {
          type: FETCHED_ERROR,
          payload
     };
};

export const getMovies = (query, type = typeMapping.search) => dispatch => {
     dispatch(startFetching());

     fetch(getMoviesUrl(query, type))
          .then(response => response.json())
          .then(response => response.Search)
          .then(movies => dispatch(fetchedMovies(movies)));
};
