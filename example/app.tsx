import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import Cute from '../src';
import {AppWrapper, JsonWrapper, JsonsWrapper} from './styled';

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
  }]
};

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  renderUglyJson() {
    return (
      <JsonWrapper>
        <h1>default</h1>
        <pre>
          {JSON.stringify(json, undefined, 2)}
        </pre>
      </JsonWrapper>
    )
  }

  renderCute() {
    return (
      <JsonWrapper>
        <h1>react-cute</h1>
        <Cute
          json={json}
        />
      </JsonWrapper>
    )
  }

  renderFeatures() {
    return (
      <div>
        <h1>
          Features ✨
        </h1>
        <ul>
          <li>
            Out of the box UI
          </li>
          <li>
            Different colors based on value type
          </li>
          <li>
            Render values not showed by default
          </li>
          <li>
            Dependency free + no external CSS
          </li>
          <li>
             <a href="https://bundlephobia.com/result?p=react-cute" target="_blank">
              3kB size
             </a>
          </li>
        </ul>
        <h1>
          Install 🚀
        </h1>
        <pre>
          $ yarn add react-cute
        </pre>
      </div>
    )
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <JsonsWrapper>
          {this.renderUglyJson()}
          {this.renderCute()}
        </JsonsWrapper>
        {this.renderFeatures()}
      </AppWrapper>
    )
  }
}