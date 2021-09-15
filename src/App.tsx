import React from 'react';

import './App.scss';
import { Buttons } from './components/Buttons';
import { Content } from './components/Content';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia hic quod similique iusto error doloremque amet quos, labore nulla, voluptatibus possimus repellat aperiam eius numquam asperiores tempora culpa eveniet dicta nemo pariatur, aspernatur minus deserunt. Sed animi rem illum saepe, ducimus ipsam iusto dignissimos numquam!' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: 'tab-1',
  };

  changeTab = (id: string) => {
    this.setState({ selectedTab: id });
  };

  render() {
    const currentTab = tabs.find(tab => tab.id === this.state.selectedTab);

    return (
      <div className="App">
        <h1>
          Selected tab is
          {' '}
          {currentTab?.title}
        </h1>
        <Buttons tabButtons={tabs} changeTab={this.changeTab} />
        <Content selectedTab={this.state.selectedTab} tabButtons={tabs} />
      </div>
    );
  }
}

export default App;
