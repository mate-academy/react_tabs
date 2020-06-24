import React, { Component } from 'react';
import styles from './Tabs.module.css';
import { Header } from '../Header/Header';

export class Tabs extends Component {
  state = {
    data: this.props.tabs[0].content,
  }

  onTabSelected = (index) => {
    this.setState(prevState => ({ data: this.props.tabs[index].content }));
  }

  render() {
    return (
      <>
        <ul className={styles.tabs__header}>
          {
            this.props.tabs
              .map((header, index) => (
                <Header
                  key={`${header}${index}`}
                  index={index}
                  onClick={this.onTabSelected}
                  name={header.title}
                />
              ))
          }
        </ul>
        <div>
          <p>{this.state.data}</p>
        </div>
      </>
    );
  }
}
