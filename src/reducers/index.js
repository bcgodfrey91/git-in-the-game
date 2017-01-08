import { combineReducers } from 'redux';
import username from './username';
import events from './event';
import pushEvents from './pushEvents';
import openedPullRequests from './openedPullRequests';
import issuesCreated from './issuesCreated';
import issuesClosed from './issuesClosed';

export const rootReducer = combineReducers({
  username,
  events,
  pushEvents,
  openedPullRequests,
  issuesCreated,
  issuesClosed,
});

export default rootReducer;
