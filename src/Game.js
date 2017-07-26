import React, { Component } from 'react';
import Stars from './Stars'

export default class Game extends Component {
  render() {
    return (
      <div>
        <b>Play Nine</b>
        <Stars />
      </div>
      );
  }
}