import React from 'react';
import { TabsType } from '../../types';
import { Tab } from '../Tab';

export class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }

  onTableSelected = (index) => {
    this.setState(() => ({
      activeIndex: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="app__tabs tabs">
        <div className="tabs__tab tab">
          {tabs.map((tab, index) => (
            <Tab
              key={tabs.title}
              index={index}
              onTableSelected={this.onTableSelected}
              title={tab.title}
              isActive={activeIndex === index}
            />
          ))}
        </div>
        <p className="app__text">{tabs[activeIndex].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = TabsType;
