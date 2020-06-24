import PropType from 'prop-types';
import React, { Component } from 'react';
import styles from './Tabs.module.css';
import { Tab } from '../Header/Tab';
import { tabsShape } from '../Shapes/tabsShape';

export class Tabs extends Component {
  state = {
    data: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (index) => {
    this.setState(() => ({ data: this.props.tabs[index].content }));
  }

  render() {
    return (
      <div className={styles.tabs}>
        <ul className={styles.tabs__header}>
          {
            this.props.tabs
              .map((header, index) => (
                <Tab
                  key={header.title}
                  index={index}
                  onClick={this.onTabSelected}
                  name={header.title}
                />
              ))
          }
        </ul>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropType.arrayOf(tabsShape).isRequired,
  index: PropType.number.isRequired,
};
