import React from 'react';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="container">
        <div className="container__tabs">
          {tabs.map((tab, index) => (
            <Tab
              tabOnClick={() => this.onTabSelected(index)}
              key={tab.title}
              index={index}
              activeTab={this.state.activeTab}
              title={tab.title}
            />
          ))}
        </div>

        <div className="text-container">
          {tabs[this.state.activeTab].content}
        </div>

      </div>
    );
  }
}

export default Tabs;
