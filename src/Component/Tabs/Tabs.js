import React from 'react';
import PropTypes, { element } from 'prop-types';
import styles from './Tabs.module.css';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  toggleTab = index => () => {
    this.setState(() => ({
      activeTab: index,
    }));
  }

  render() {
    return (
      <div className={styles.tabsList}>
        <ul className={styles.tabs}>
          {this.props.children.map((child, index) => ({
            ...child,
            props: {
              ...child.props,
              toggle: this.toggleTab(index),
              toggleClass: index === this.state.activeTab,
            },
          }))}
        </ul>
        <ul className={styles.tabs}>
          {this.props.children.map((child, index) => (
            <li
              key={index.toString()}
              className={
                this.state.activeTab === index
                  ? styles.active
                  : styles.nonactive
              }
            >
              {child.props.children}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};
