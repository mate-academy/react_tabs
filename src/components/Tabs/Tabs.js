import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  onTabSelected = (id) => {
    this.setState({
      activeTab: id,
    });
  };

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map(tab => (
            <Tab
              handleClick={() => this.onTabSelected(tab.id)}
              title={tab.title}
              activeTab={activeTab}
              id={tab.id}
              key={tab.id}
            />
          ))}
        </div>
        <div className="tab-body">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

export default Tabs;
