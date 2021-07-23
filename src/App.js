import React from 'react';
import TitleText from './component/TitleText/TitleText';
import TabList from './component/TabsList/TabsList';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text  3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
    selectedTabId: tabs[0].id,
  }

  changeTab = (id) => {
    if (this.state.selectedTabId === id) {
      return;
    }

    const choosedTab = tabs.find(tab => tab.id === id);

    this.setState({
      selectedTab: choosedTab,
      selectedTabId: choosedTab.id,
    });
  }

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <>
        <h1 className="tabsHeader">
          Tab selected
          {' '}
          {this.state.selectedTab.title}
        </h1>
        <TabList
          tabs={tabs}
          selectedTabId={selectedTabId}
          onClick={this.changeTab}
        />
        <TitleText selectedTab={selectedTab} />
      </>
    );
  }
}

export default App;
