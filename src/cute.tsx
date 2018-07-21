import * as React from 'react';
import { Component } from 'react';
import * as styles from './styles';
import { cutify } from './cutify';

export interface CuteProps {
  json: Object;
}

export interface CuteState {

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