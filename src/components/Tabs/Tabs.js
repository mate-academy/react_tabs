import React, { Component } from 'react';
import { Tab } from '../Tab/Tab';
import { TabsShapes } from '../Shapes/TabsShapes';
import './Tabs.css';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  tabPosition = (index) => {
    this.setState(() => ({
      value: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { value } = this.state;

    return (
      <div className="tabs">
        {this.props.tabs.map((item, index) => (
          <Tab
            key={item.title}
            title={item.title}
            index={index}
            isActive={value === index}
            tabChange={this.tabPosition}
          />
        ))}
        <p className="tabs__text">{tabs[value].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = TabsShapes.isRequired;
