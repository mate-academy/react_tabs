import React from 'react';
import { Tabs } from './Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, totam deleniti asperiores distinctio qui nemo iste placeat unde amet quis voluptatem enim dolor laborum illum, similique blanditiis voluptate magnam! Nulla saepe hic eum sed quia corporis consequuntur quam voluptatum natus. Ipsam necessitatibus voluptatum exercitationem velit suscipit. Repellendus deleniti quisquam quaerat!' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit consectetur dolorem doloremque aliquam iste earum aliquid sit, nulla iure nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, totam deleniti asperiores distinctio qui nemo iste placeat unde amet quis voluptatem enim dolor laborum illum, similique blanditiis voluptate magnam! Nulla saepe hic eum sed quia corporis consequuntur quam voluptatum natus. Ipsam necessitatibus voluptatum exercitationem velit suscipit. Repellendus deleniti quisquam quaerat!' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi cupiditate fugit voluptate. Earum, omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, totam deleniti asperiores distinctio qui nemo iste placeat unde amet quis voluptatem enim dolor laborum illum, similique blanditiis voluptate magnam! Nulla saepe hic eum sed quia corporis consequuntur quam voluptatum natus. Ipsam necessitatibus voluptatum exercitationem velit suscipit. Repellendus deleniti quisquam quaerat!' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (chosenTab: Tab) => {
    this.setState({ selectedTab: chosenTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="container d-flex justify-content-center">
        <div className="App w-75 border border-light p-5 mt-5">
          <h1>
            {`Selected tab is ${selectedTab.title}`}
          </h1>
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            selectTab={this.onTabSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;
