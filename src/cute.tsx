import * as React from 'react';
import { Component } from 'react';
import * as styles from './styles';

export interface CuteProps {
  json: Object;
}

export interface CuteState {

}

const syntaxHighlight = (json: Object): string => {
  const jsonString = JSON.stringify(json, replacer, 2)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return jsonString.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
    let className = 'number';
    let text = match;
    
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        className = 'key';
        text = text.replace(':', '<span class="colon">:</span>');
      } else {
        if (match === '"undefined"') {
          className = 'undefined';
        } else if (match === '"[Function]"') {
          className = 'function';
        } else {
          className = 'string';
        }
      }
    } else if (/true|false/.test(match)) {
      className = 'boolean';
    } else if (/null/.test(match)) {
      className = 'null';
    } 

    return `<span class="${className}">${text}</span>`;
  });
}

const replacer = (_: string, value: any) => {
  if (typeof value === 'function') {
    return '[Function]';
  }

  if (typeof value === 'undefined') {
    return 'undefined';
  }

  return value;
}

const cutify = (json: Object): string => {
  return syntaxHighlight(json)
    .replace(/"/g, '');
}

export class Cute extends Component<CuteProps, CuteState> {
  render() {
    const { json } = this.props;
    const cutifiedJson = cutify(json);

    return (
      <pre style={styles.pre} dangerouslySetInnerHTML={{__html: cutifiedJson}} />
    );
  }
}