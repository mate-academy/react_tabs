import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  onChangeTab: any,
  activeTabId: string,
}

export class Tabs extends React.Component <Props, {}> {
  changeTab = (tabId: string) => {
    this.props.onChangeTab(tabId);
  };

  render() {
    const { tabs } = this.props;
    const selectedTab = tabs.find(tab => tab.id === this.props.activeTabId);

    return (
      <div className="tabs">
        <div>
          {this.props.tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              onClick={() => this.changeTab(tab.id)}
              className={classNames('tabs__button', { 'tabs__button--selected': tab.id === this.props.activeTabId })}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs__content">
          {selectedTab && <p>{selectedTab.content}</p>}
        </div>
      </div>
    );
  }
}
