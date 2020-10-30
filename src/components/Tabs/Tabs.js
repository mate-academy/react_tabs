import React from 'react';

import { Tab } from '../Tab';
import { TabsShape } from '../shapes/TabsShape';

export class Tabs extends React.PureComponent {
  state = {
    selectedTabIndex: this.props.defaultTabIndex,
  }

  switchTab = (selectedTabIndex) => {
    this.setState({
      selectedTabIndex,
    });
  };

  render() {
    const { tabs } = this.props;
    const { selectedTabIndex } = this.state;

    return (
      <div>
        <div className="ui green inverted pointing secondary menu">
          {tabs.map(tab => (
            <Tab
              key={tab.index}
              {...tab}
              switchTab={this.switchTab}
              selectedTabIndex={selectedTabIndex}
            />
          ))}
        </div>

        <div className="ui segment active tab">
          {tabs[selectedTabIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = TabsShape;
