import {TrackConstants} from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const track = (state, action) => {
  switch(action.type) {
    case TrackConstants.START_RECORDING:
      return {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      };
    case TrackConstants.STOP_RECORDING:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: [], timeSlice: action.timeNow - state.timeStart }
        ]
      });
    case TrackConstants.ADD_NOTES:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: action.notes, timeSlice: action.timeNow - state.timeStart }
        ]
      });
    default:
      return state;
  }
};

const tracks = (state = {}, action) => {
  switch(action.type) {
    case TrackConstants.START_RECORDING:
      currTrackId++; // increment id of current (newest) track
      return merge({}, state, {
        [currTrackId]: track(undefined, action)
      });
    case TrackConstants.STOP_RECORDING:
      return merge({}, state, {
        [currTrackId]: track(state[currTrackId], action)
      });
    case TrackConstants.ADD_NOTES:
      return merge({}, state, {
        [currTrackId]: track(state[currTrackId], action)
      });
    case TrackConstants.DELETE_TRACK:
      let nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};

export default tracks;
