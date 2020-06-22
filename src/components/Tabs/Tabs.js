import React from 'react';
import { shapeAllTabs } from '../Shapes';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            tab={tab}
            index={index}
            change={this.props.onChange}
          />
        ))}
      </div>
    );
  }
}

Tabs.propTypes = shapeAllTabs.isRequired;
