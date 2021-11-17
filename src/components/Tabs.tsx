import React from 'react';
import ClassNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export class Tabs extends React.PureComponent<Props, {}> {
  render() {
    const {
      selectedTab,
      selectedTabId,
      tabs,
      onTabSelected,
    } = this.props;

    return (
      <div>
        {
          tabs.map((tab: Tab) => (
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
              className={ClassNames('button', { 'button-active': selectedTabId === tab.id })}
            >
              {tab.title}
            </button>
          ))
        }
        <div className="content">
          {selectedTab.content}
        </div>
      </div>
    );
  }
}
