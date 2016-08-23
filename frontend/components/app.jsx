import React from 'react';
import SynthContainer from './synth/synth_container';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1><SynthContainer/></h1>
    );
  }
}



export default App;
