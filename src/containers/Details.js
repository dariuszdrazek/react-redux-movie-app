import { connect } from 'react-redux';
import Details from '../components/Details';
import { getDetails } from '../redux/details/actions';

const mapState = (state, ownProps) => {
     return {
          detail: state.movies,
          id: ownProps.match.params.id
     };
};

const mapDispatch = dispatch => {
     return {
          getDetails: (query, type) => dispatch(getDetails(query, type))
     };
};

export default connect(
     mapState,
     mapDispatch
)(Details);
