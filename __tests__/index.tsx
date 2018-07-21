import * as React from 'react';
import {shallow} from 'enzyme';
import Cute from '../src';

describe('Cute', () => {
  const setup = () => {
    const json = {

    };
    const component = shallow(<Cute json={json} />);

    return {
      component,
      json  
    };
  };
  
  it('Should render a cute json', () => {
    expect(1).toEqual(1);
  });
});
