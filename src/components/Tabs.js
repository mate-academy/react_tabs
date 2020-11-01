import React from 'react';
import PropTypes from 'prop-types';
import { TabShape } from './shapes/TabShape';

import { TabsHeader } from './TabsHeader';
import { TabsBody } from './TabsBody';

export class Tabs extends React.Component {
  state = {
    currentIndex: 0,
  }

  handleTabSelect = (currentIndex) => {
    this.setState(() => ({
      currentIndex,
    }));
  }

  render() {
    const { currentIndex } = this.state;
    const { tabs } = this.props;
    const activeTab = tabs.find(tab => tab.index === currentIndex);

    return (
      <div className="card">
        <TabsHeader
          tabs={tabs}
          currentIndex={currentIndex}
          onSelect={this.handleTabSelect}
        />

        <TabsBody tab={activeTab} />

        <div className="card-footer" />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(TabShape)).isRequired,
};
