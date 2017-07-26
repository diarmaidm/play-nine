import React, { Component } from 'react';
import Stars from './Stars'
import Button from './Button'
import Answer from './Answer'

export default class Game extends Component {
  render() {
    return (
      <div>
        <b>Play Nine</b>
        <Stars />
        <Button />
        <Answer />
      </div>
      );
  }
}