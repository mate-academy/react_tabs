import React from 'react';
import propTypes from 'prop-types';
import { TabType } from '../Types';

export class Tabs extends React.PureComponent {
  render() {
    const { id, tabs, onTabSelected } = this.props;
    const selectedTab = tabs.find(tab => tab.id === id);

    return (
      <>
        <div>
          {tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div>
          {selectedTab.content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  id: propTypes.string.isRequired,
  tabs: propTypes.shape(TabType).isRequired,
  onTabSelected: propTypes.func.isRequired,
};
