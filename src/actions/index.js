import moment from 'moment';

const types = {
  USERNAME: 'USERNAME',
  GET_EVENTS: 'GET_EVENTS'
};

export const submitUserName = (inputVal) => {
  localStorage.setItem('username', JSON.stringify(inputVal));
  return {
    type: types.USERNAME,
    username: inputVal
  };
};

export const getEvents = (data) => {
  return {
    type: types.GET_EVENTS,
    data: data
  };
};

export const getWeeklyCommitArrays = (arr) => {

  let commitsByDay = [0,0,0,0,0,0,0];

  let thisWeekPushEvents = arr.filter(e => {
    return (
      e.type === 'PushEvent' &&
      moment.utc(e.created_at).isoWeek() == moment.utc(new Date()).isoWeek()
    )
  });

  thisWeekPushEvents.map(e => {
     return e.payload.commits ?
       commitsByDay[moment(e.created_at).isoWeekday() - 1] += e.payload.commits.length : null
   });

   return {
     type: 'PARSE_COMMITS',
     data: commitsByDay
   };
};
