import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game Component', () => {

  it('renders the Game component correctly', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.contains('Play Nine')).to.be.true;
  });
});