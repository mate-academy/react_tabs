import React, { Component } from 'react';
import './Tabs.css';
import Tab from '../Tab/Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  activeTab = (index) => {
    this.setState({
      active: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { active } = this.state;

    return (
      <>
        <div className="tab-list">
          {tabs.map((tab, index) => (
            <Tab
              tab={tab}
              key={tab.title}
              clickFunction={() => this.activeTab(index)}
              index={index}
              active={active}
            />
          ))}
        </div>
        <div
          style={{ background: tabs[active].background }}
          className="content"
        >
          {tabs[active].content}
          <hr className="line" />
        </div>
      </>
    );
  }
}

export default Tabs;
