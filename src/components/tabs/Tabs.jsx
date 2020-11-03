import React from 'react';
import { Tab } from '../tab';
import { TabsShape } from '../shapes/TabsShape';
import './Tabs.css';

export class Tabs extends React.PureComponent {
  state = {
    activeIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState(() => ({ activeIndex: index }));
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="App__tabs tabs">
        <div className="tabs__tab">
          {
            tabs.map((tab, index) => (
              <Tab
                key={tab.title}
                index={index}
                callback={this.onTabSelected}
                title={tab.title}
                isActive={activeIndex === index}
              />
            ))
          }
        </div>
        <p className="tabs__content">{tabs[activeIndex].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = TabsShape;
