import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
  state = {
    activeTab: this.props.children[0].props.title,
  };

  onTabSelected = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      props: {
        children,
      },
      state: {
        activeTab,
      },
    } = this;

    return (
      <div className="tabs">
        <ul className="tab-list">
          {children.map((child) => {
            const { title } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={title}
                title={title}
                onClick={this.onTabSelected}
              />
            );
          })}
        </ul>
        <div className="tab-content">
          {children.map(item => (
            item.props.title !== activeTab
              ? undefined
              : item.props.children))
          }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
