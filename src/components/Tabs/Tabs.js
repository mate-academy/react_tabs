import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { onClickTabItem, props: { children }, state: { activeTab } } = this;

    return (
      <div className="tabs">
        <ul className="tabs-list">
          {children.map(child => (
            <Tab
              activeTab={activeTab}
              onClick={onClickTabItem}
              label={child.props.label}
              key={child.props.label}
            />
          ))}
        </ul>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) {
              return undefined;
            }

            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.shape({
        label: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
