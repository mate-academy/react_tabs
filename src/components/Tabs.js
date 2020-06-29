import React from 'react';
import { TabSection } from './TabSection';
import { TabsShape } from './Shapes';
import { Date } from './Date';

export class Tabs extends React.Component {
  state = {
    date: this.props.tabs[this.props.defaultIndex].content,
  };

  onTabSelected = (index) => {
    this.setState(() => ({ date: this.props.tabs[index].content }));
  }

  render() {
    return (
      <>
        <TabSection tabs={this.props.tabs} onClick={this.onTabSelected} />
        <Date date={this.state.date} />
      </>
    );
  }
}

Tabs.propTypes = TabsShape.isRequired;
