import React, { Component } from "react";
import styles from './ListBox.module.scss';
import Boxcolor from '../BoxColor/Boxcolor';

interface ListProps { items: string[]; }; 

export default class ListNewBox extends Component<ListProps>{
    render(): React.ReactNode {
        // console.log(PropHex);
      return (
        <div className={styles.containerRect}>
          {this.props.items.map(rec => (
              // <div className={styles.Boxcolor} key={rec} style={divStyle(rec)}>{rec}</div>
              <Boxcolor key={rec}>{rec}</Boxcolor>
          ))}
          <div className={styles.clearFloat}></div>
        </div>
      );
    }
}