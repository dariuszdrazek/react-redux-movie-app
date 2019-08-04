import { combineReducers } from 'redux';
import { movies } from './movies/reducers';
import { details } from './details/reducers';
export default combineReducers({
     details,
     movies
});
