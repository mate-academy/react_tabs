import React from 'react';
import PropTypes from 'prop-types';
import { Tab, TabType } from './Tab';

export class Tabs extends React.Component {
  state = {
    active: 0,
  }

  onTabSelected = content => this.setState(() => ({
    active: content,
  }));

  render() {
    const { tabs } = this.props;
    const { active } = this.state;

    return (
      <>
        <div className="tabs">
          {tabs.map(tab => (
            <div key={tab.index}>
              <Tab
                tab={tab}
                clickHandler={this.onTabSelected}
                activeContent={active}
              />
            </div>
          ))}
        </div>
        <div className="tab__content">
          {tabs[this.state.active].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabType).isRequired,
};
