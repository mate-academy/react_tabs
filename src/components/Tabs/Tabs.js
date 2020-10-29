import React from 'react';
import { Tab } from '../Tab/Tab';
import { TabsShape } from './TabsShape';
import './Tabs.css';

export class Tabs extends React.PureComponent {
  state = {
    activeIndex: this.props.index,
  }

  onTabSelected = (index) => {
    this.setState(() => ({ activeIndex: index }));
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="App__tabs">
        <div className="App__tab">
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
        <p>{tabs[activeIndex].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = TabsShape;
