import React from 'react';
import PropTypes from 'prop-types';
import { Tab, TabType } from './Tab';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  onTabSelected = content => this.setState(() => ({
    activeTab: content,
  }));

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <div className="tabs">
          {tabs.map(tab => (
            <div key={tab.index}>
              <Tab
                tab={tab}
                clickHandler={this.onTabSelected}
                activeContent={activeTab}
              />
            </div>
          ))}
        </div>
        <div className="tab__content">
          {tabs[this.state.activeTab].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabType).isRequired,
};
