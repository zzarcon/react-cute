import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import {injectGlobal} from 'styled-components';
import Cute from '../src';
import {AppWrapper} from './styled';

// TODO: find proper way of doing this
injectGlobal`
  .string {
    color: #f1fa8c; 
  }
  .number {
    color: #50fa7b; 
  }
  .boolean {
    color: #ff79c6; 
  }
  .function {
    color: #bd93f9; 
  }
  .null {
    color: #bd93f9; 
  }
  .undefined {
    color: #bd93f9;
  }
  .key {
    color: #66d9ef;
    margin-right: 5px;
  }
  .colon {
    color: #f8f8f2;
    margin-left: 1px;
  }
`;

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
    name: 'Spain'
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