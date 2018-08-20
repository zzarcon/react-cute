import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import Cute from '../src';
import {Title, AppWrapper, JsonWrapper, JsonsWrapper} from './styled';

export interface AppState {
  json: Object;
}

const repoUrl = 'https://github.com/zzarcon/react-cute';
const initialJson = {
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
    json: initialJson
  }

  onChange = (e: any) => {
    try {
      const text = e.target.textContent;
      const json = JSON.parse(text);

      this.setState({json});
    } catch (e) {

    }
  }

  renderUglyJson() {
    const {json} = this.state;
    return (
      <JsonWrapper>
        <h1>default</h1>
        <pre contentEditable onInput={this.onChange}>
          {JSON.stringify(json, undefined, 2)}
        </pre>
      </JsonWrapper>
    )
  }

  renderCute() {
    const {json} = this.state;

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
        <Title>Render cute JSON in React</Title>
        <JsonsWrapper>
          {this.renderUglyJson()}
          {this.renderCute()}
        </JsonsWrapper>
        {this.renderFeatures()}
      </AppWrapper>
    )
  }
}
