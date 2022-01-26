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
      <div>
        {this.props.tabs.map((tab: Tab) => {
          return (
            <button
              type="button"
              key={tab.id}
              onClick={() => this.props.onTabSelected(tab)}
            >
              {tab.title}
            </button>
          );
        })}
        <p>
          {this.props.tabs.find((tab) => tab.id === this.props.selectedTabId)?.content}
        </p>
      </div>
    );
  }
}
