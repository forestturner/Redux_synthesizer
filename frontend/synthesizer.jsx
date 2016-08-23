import Note from './util/note';
import configureStore from './store/store';
import Root from './components/root';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  const el = document.getElementById("root");
  window.store = store;
  ReactDOM.render(Root({store}), el);
});
// window.note = Note;
// window.store = store;
