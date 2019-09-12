import React from 'react';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 0,
    };
  }

  handleClick = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { handleClick } = this;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <ul className="tabs__name">
          {tabs.map((tab, index) => (
            <Tab
              tab={tab}
              index={index}
              handleClick={handleClick}
              key={`${tab.title}-key`}
            />
          ))}
        </ul>
        <div className="tabs__content">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

export default Tabs;
