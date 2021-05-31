import React from 'react';

export class Tabs extends React.Component {
  state = {}

  render() {
    const { tabs, selectedTab, onTabSelected } = this.props;
    return (
      <>
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <div>
          {tabs.map(tab => (
            <button
              type="button"
              value={selectedTab}
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
