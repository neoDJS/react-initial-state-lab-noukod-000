// your Bomb code here!
import React from 'react';

class Bomb  extends  React.Component{
  constructor(props){
    super(props);
    this.state{
      secondsLeft: 0
    }
  }

  render(`${this.state.secondsLeft} seconds left before I go boom!`);
}
