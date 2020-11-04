import React from 'react';

export class Tabs extends React.Component {
  state = {
    selectedTab: 0,
  };

  onTabSelected = (selected) => {
    this.setState({
      selectedTab: selected,
    });
  }

  render() {
    const { tabs } = this.props;
    const activeTab = tabs.find(tab => tab.id === this.state.selectedTab);

    return (
      <>
        <div>
          <ul>
            {tabs.map(tab => (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => this.onTabSelected(tab.id)}
                  className={
                    `${tab.id === this.state.selectedTab ? 'active' : ''}`
                  }
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p>
            Tab
            {this.state.selectedTab}
          </p>
          {' '}
          <h5>{activeTab.content}</h5>
        </div>
      </>
    );
  }
}
