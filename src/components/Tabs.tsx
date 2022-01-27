import React from 'react';
// ({ tabs, selectedTab })

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export class Tabs extends React.Component<Props, {}> {
  state = {};

  render() {
    return (
      <div className="App__tab-list">
        <div className="App__buttons">
          {this.props.tabs.map((tab: Tab) => {
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => this.props.onTabSelected(tab)}
                className="App__button"
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        <p className="App__content">
          {this.props.tabs.find((tab) => tab.id === this.props.selectedTabId)?.content}
        </p>
      </div>
    );
  }
}
