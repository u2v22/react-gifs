import React, { Component } from 'react';

class Gif extends Component {
  render(){
    // KbNYOW7mJqpnv1J7XC -> id
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} className="gif"/>
    );
  }
}

export default Gif;
