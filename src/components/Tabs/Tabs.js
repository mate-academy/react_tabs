import React from 'react';

import { TabsProps } from '../../props/TabsProps';
import { Tab } from '../Tab';
import { TitleList } from '../TitleList';

export class Tabs extends React.PureComponent {
  state = {
    index: 0,
    activeTab: this.props.tabs[0],
  }

  onTabSelected = (index) => {
    this.setState({
      index,
      activeTab: this.props.tabs[index],
    });
  }

  render() {
    const {
      state: { index, activeTab },
      props: { tabs },
      onTabSelected,
    } = this;

    return (
      <div>
        <TitleList
          index={index}
          tabs={tabs}
          onTabSelected={onTabSelected}
        />
        <Tab>{activeTab.content}</Tab>
      </div>
    );
  }
}

Tabs.propTypes = TabsProps;
