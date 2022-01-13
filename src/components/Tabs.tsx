import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
}

export class Tabs extends React.PureComponent<Props, {}> {
  render() {
    const {
      selectedTabId,
      tabs,
      onTabSelected,
    } = this.props;

    const selectedTab = tabs.find(tab => tab.id === selectedTabId);

    return (
      <div>
        {
          tabs.map((tab: Tab) => (
            <button
              type="button"
              onClick={() => onTabSelected(tab.id)}
              className={classNames('button', { 'button-active': selectedTabId === tab.id })}
            >
              {tab.title}
            </button>
          ))
        }
        <div className="content">
          {selectedTab?.content}
        </div>
      </div>
    );
  }
}
