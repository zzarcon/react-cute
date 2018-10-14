import * as React from 'react';
import {mount} from 'enzyme';
import Cute from '../src';

describe('Cute', () => {
  const setup = () => {
    const json = {
      name: 'hector',
      nick: 'zzarcon',
      age: 26,
      getName() {
        return this.name;
      },
      info: {
        hobbies: ['coding', 'skate', 'gym']
      }
    };
    const color = {
      string: '#fff',
      number: 'rgb(255, 255, 255)',
      function: 'rgba(0, 0, 0, 0.5)',
    };
    const component = mount(<Cute json={json} color={color} />);
    const html = component.find('pre').html();

    return {
      component,
      json,
      html
    };
  };
  
  it('should render a cute json', () => {
    const {component} = setup();

    expect(component.find('pre')).toHaveLength(1);
  });

  it.skip('should render all keys', () => {

  });

  it('should recognize colons', () => {
    const {html} = setup();
    
    expect(html).toContain('<span class="cute-key">name<span class="cute-colon">:</span></span>');
    expect(html).toContain('<span class="cute-key">nick<span class="cute-colon">:</span></span>');
  });

  it('should recognize strings', () => {
    const {html} = setup();
    
    expect(html).toContain('<span class="cute-string">hector</span>');
    expect(html).toContain('<span class="cute-string">zzarcon</span>');
  });

  it('should recognize numbers', () => {
    const {html} = setup();
    
    expect(html).toContain('<span class="cute-number">26</span>');
  });

  it('should recognize functions', () => {
    const {html} = setup();
    
    expect(html).toContain('<span class="cute-key">getName<span class="cute-colon">:</span></span> <span class="cute-function">[Function]</span>');
  });

  it.skip('should work with nested objects', () => {
    
  });

  it.skip('should work with Arrays', () => {
    
  });

  it.skip('should work with Classes', () => {
    
  });

  it('should render a configure colors', () => {
    const { component } = setup();
    const color = component.prop('color');

    expect(color).toEqual({
      string: '#fff',
      number: 'rgb(255, 255, 255)',
      function: 'rgba(0, 0, 0, 0.5)'
    });
  });
});
