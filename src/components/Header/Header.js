import React, { Component } from 'react';
import styles from './Header.module.css';

export class Header extends Component {

  clickHandler = () => {
    this.props.onTabSelected t(this.props.index);
  }

  render() {
    return (
      <button
        type="button"
        className={styles.header}
        onClick={this.clickHandler}
      >
        {this.props.name}
      </button>
    );
  }
}
