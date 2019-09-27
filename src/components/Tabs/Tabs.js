import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    activeTabId: 0,
  };

  handleClick = (id) => {
    this.setState({
      activeTabId: id,
    });
  };

  render() {
    const { activeTabId } = this.state;
    const { tabs } = this.props;

    return (
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map(tab => (
            <Tab
              onClick={() => this.handleClick(tab.id)}
              title={tab.title}
              isActive={this.state.activeTabId === tab.id}
              id={tab.id}
              key={tab.id}
            />
          ))}
        </div>
        <div className="tab-body">
          {tabs[activeTabId].content}
        </div>
      </div>
    );
  }
}

export default Tabs;
