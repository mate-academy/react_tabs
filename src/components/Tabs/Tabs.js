import PropType from 'prop-types';
import React, { Component } from 'react';
import styles from './Tabs.module.css';
import { Tab } from '../Tab/Tab';
import { tabsShape } from '../Shapes/tabsShape';

export class Tabs extends Component {
  state = {
    activeIndex: this.props.index,
  }

  onTabSelected = (index) => {
    this.setState(() => ({ activeIndex: index }));
  }

  tabPressedHandler = (index) => {
    this.setState(() => ({ activeIndex: index }));
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className={styles.tabs}>
        <div className={styles.tabs__header}>
          {
            tabs.map((header, index) => (
              <Tab
                key={header.title}
                index={index}
                onClick={this.onTabSelected}
                onFocus={this.tabPressedHandler}
                name={header.title}
                isActive={activeIndex === index}
              />
            ))
          }
        </div>
        <p>{tabs[activeIndex].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropType.arrayOf(tabsShape).isRequired,
  index: PropType.number.isRequired,
};
