import React from 'react';

import { TabsProps } from '../../props/TabsProps';
import { Tab } from '../Tab';
import { TitleList } from '../TitleList';

export class Tabs extends React.PureComponent {
  state = {
    index: 0,
    content: this.props.tabs[0].content,
  }

  onTabSelected = (index) => {
    this.setState({
      index,
      content: this.props.tabs[index].content,
    });
  }

  render() {
    const {
      state: { index, content },
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
        <Tab>{content}</Tab>
      </div>
    );
  }
}

Tabs.propTypes = TabsProps;
