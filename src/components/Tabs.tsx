import React from 'react';

interface Props {
  tabs: Tab[],
  onChangeTab: any,
}

export class Tabs extends React.Component <Props, {}> {
  state = {
    activeTab: this.props.tabs[0].id,
  };

  changeTab = (tabId: string) => {
    this.setState({ activeTab: tabId });
    this.props.onChangeTab(tabId);
  };

  render() {
    const { tabs } = this.props;
    const selectedTab = tabs.find(tab => tab.id === this.state.activeTab);

    return (
      <div className="tabs">
        <div>
          {this.props.tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              onClick={() => this.changeTab(tab.id)}
              className="tabs__button"
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs__content">
          <p>
            {selectedTab?.content}
          </p>
        </div>
      </div>
    );
  }
}
