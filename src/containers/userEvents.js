import { connect } from 'react-redux';
import { getEvents, getWeeklyCommitArrays } from '../actions/index';

const mapStateToProps = (state) => {
 const { events, weeklyCommits } = state
 return {
   events,
   weeklyCommits
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
    },
    getWeeklyCommitArrays: (events) => {
      dispatch(getWeeklyCommitArrays(events));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
