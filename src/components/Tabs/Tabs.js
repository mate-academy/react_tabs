import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';
import { TabsShape } from '../Shapes/TabsShape';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  generateTabContent = (index) => {
    this.setState(() => ({
      value: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { value } = this.state;

    return (
      <div className="tabs__list">
        {this.props.tabs.map((tabItem, index) => (
          <Tab
            title={tabItem.title}
            index={index}
            isActive={value === index}
            key={tabItem.title}
            changeTab={this.generateTabContent}
          />
        ))}
        <p className="tabs__content">{tabs[value].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = TabsShape.isRequired;

export default Tabs;
