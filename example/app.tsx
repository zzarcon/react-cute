import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import Cute from '../src';
import {AppWrapper} from './styled';

export interface AppState {
  
}

const repoUrl = 'https://github.com/zzarcon/react-cute';
const json = {
  user: {
    name: 'Hector',
    lastName: 'Zarco'
  },
  isGeek: true,
  status: undefined,
  foo: null,
  age: 26,
  getName() {
    return this.user.name;
  },
  countries: [{
    name: 'Spain',
    cities: ['Valencia', 'Barcelona']
  }, {
    name: 'Austria'
  }, {
    name: 'Australia'
  }]
};

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <Cute 
          json={json}
        />
      </AppWrapper>
    )
  }
}