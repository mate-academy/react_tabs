import React from 'react';
import { TabSection } from './TabSection';
import { TabsShape } from './Shapes';
import { Data } from './Data';

export class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState(() => ({ activeIndex: index }));
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <>
        <TabSection
          tabs={this.props.tabs}
          onClick={this.onTabSelected}
          activeIndex={this.state.activeIndex}
        />
        <Data data={this.props.tabs[activeIndex].content} />
      </>
    );
  }
}

Tabs.propTypes = TabsShape.isRequired;
