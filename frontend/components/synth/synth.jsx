import React from 'react';
import {NOTES_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';
// const Synth = (props)=>(
//   <div>Synth</div>
// );

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [];
    NOTES_NAMES.forEach(el=>{
      this.notes.push(new Note(TONES[el]));
    });
  }

  componentDidMount(){
    $(document).on('keydown', e =>this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e){
    // debugger
    e.preventDefault();
    let key = e.originalEvent.code.toLowerCase().slice(3);
    this.props.keyPressed(key);
  }

  onKeyUp(e) {
    e.preventDefault();
    let key = e.originalEvent.code.toLowerCase().slice(3);
    this.props.keyReleased(key);
  }

  playNotes(){
      NOTES_NAMES.forEach((note, id)=>{
        if ( this.props.notes.includes(note)) {
          this.notes[id].start();
        } else {
          this.notes[id].stop();
        }
      });
  }


  render(){
    this.playNotes();
    const rend = NOTES_NAMES.map((note,id)=>(
      <NoteKey name={note} key={id}/>
    ));
    return (
      <ul>
        {rend}
      </ul>
    );
  }
}


export default Synth;
