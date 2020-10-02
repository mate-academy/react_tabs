import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  onTabSelected = (index) => {
    this.setState({ activeTab: index });
  }

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <div className="tabs">
          {children.map((tab, index) => (
            <Tab
              tab={tab.props}
              activeTab={activeTab}
              onTabSelected={this.onTabSelected}
              index={index}
            />
          ))}
        </div>

        <div className="content">
          {children.find((tab, index) => (index === activeTab)).props.children}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
