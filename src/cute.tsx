import * as React from 'react';
import { Component } from 'react';
import * as styles from './styles';
import { cutify } from './cutify';
import { injectCSS } from './injectCSS';

export type CuteColor = {
  undefined?: string;
  string?: string;
  function?: string;
  number?: string;
  boolean?: string;
  null?: string;
  colon?: string;
  key?: string;
};

export interface CuteProps {
  json: Object;
  color?: CuteColor;
}

export interface CuteState {}

export enum ClassNames {
  string = 'cute-string',
  undefined = 'cute-undefined',
  function = 'cute-function',
  number = 'cute-number',
  boolean = 'cute-boolean',
  null = 'cute-null',
  colon = 'cute-colon',
  key = 'cute-key'
}

export class Cute extends Component<CuteProps, CuteState> {
  componentDidMount() {
    this.handleInjectCSS();
  }

  handleInjectCSS = () => {
    const {
      color: {
        string: stringColor = '#f1fa8c',
        number: numberColor = '#50fa7b',
        boolean: booleanColor = '#ff79c6',
        function: functionColor = '#bd93f9',
        null: nullColor = '#bd93f9',
        undefined: undefinedColor = '#bd93f9',
        key: keyColor = '#66d9ef',
        colon: colonColor = '#f8f8f2'
      } = {}
    } = this.props;
    injectCSS(`
      .${ClassNames.string} {
        color: ${stringColor};
      }
      .${ClassNames.number} {
        color: ${numberColor};
      }
      .${ClassNames.boolean} {
        color: ${booleanColor};
      }
      .${ClassNames.function} {
        color: ${functionColor};
      }
      .${ClassNames.null} {
        color: ${nullColor};
      }
      .${ClassNames.undefined} {
        color: ${undefinedColor};
      }
      .${ClassNames.key} {
        color: ${keyColor};
        margin-right: 5px;
      }
      .${ClassNames.colon} {
        color: ${colonColor};
        margin-left: 1px;
      }
    `);
  };

  render() {
    const { json } = this.props;
    const cutifiedJson = cutify(json);

    return (
      <pre style={styles.pre} dangerouslySetInnerHTML={{__html: cutifiedJson}} />
    );
  }
}
