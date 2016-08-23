import {combineReducers} from 'redux';
import {notes} from './notes_reducer';
import tracks from './tracks_reducer';
import {recording} from './is_recording_reducer';


const reducer = combineReducers({notes, tracks, recording});


export default reducer;
