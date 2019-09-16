import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';
import { tabsProps } from '../PropTypes/PropTypes';

class Tabs extends React.Component {
  state = {
    currentTab: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      currentTab: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;

    return (
      <>
        <div className="tabs-list">
          {tabs.map(({ title }, iterator) => (
            <Tab
              title={title}
              key={title}
              index={iterator}
              isCurrentTab={currentTab}
              handler={() => this.onTabSelected(iterator)}
            />
          ))}
        </div>
        <div className="tabs-text">
          {tabs[currentTab].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = tabsProps;

export default Tabs;
