import {connect} from 'react-redux';
import {updateExample} from '../actions';
import Example from '../components/Example';

const getExample = (state) => {
	return state.example;
};

const mapStateToProps = state => ({ example: getExample(state) });

const mapDispatchToProps = dispatch => ({
	updateExample: example => dispatch(updateExample(example))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Example);