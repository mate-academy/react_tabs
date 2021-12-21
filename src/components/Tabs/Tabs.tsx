import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: Tab) => void,
}

class Tabs extends React.PureComponent<Props, {}> {
  render() {
    const { selectedTabId, tabs, onTabSelected } = this.props;

    const selectedTab = tabs.find(tab => tab.id === selectedTabId);

    return (
      <div>
        {
          tabs.map((tab: Tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onTabSelected(tab)}
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

export default Tabs;
