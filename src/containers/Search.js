import { connect } from "react-redux";
import Search from "../components/Search";
import { getMovies } from "../redux/actions";

const mapState = ({ movies: { movies } }) => ({ movies });

const mapDispatch = dispatch => {
  return {
    getMovies: (query, type) => dispatch(getMovies(query, type))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Search);
