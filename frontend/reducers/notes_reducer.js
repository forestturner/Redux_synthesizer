import {NotesConstants} from '../actions/note_actions';
import {NOTES_NAMES} from '../util/tones';

const validKEYS = ["a","s","d","f","g"];

const keyMap = {};

validKEYS.forEach((key,id)=>{
  keyMap[key] = NOTES_NAMES[id];
});


export const notes = (state = [],action) => {

  const note = keyMap[action.key];

  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if ( !state.includes(note) && note) {
        return [...state, note];
      } else {
        return state;
      }
    case NotesConstants.KEY_RELEASED:
      if (state.includes(note) ) {
        return [...state].filter( (el) => {
          return el !== note;
        });
      } else {
        return state;
      }
    default:
      return state;
  }
};
