import React from 'react';

import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Вкладочка 1', content: 'Здесь могла быть ваша реклама 😅' },
  { id: 'tab-2', title: 'Вкладочка 2', content: 'Самое время подумать о подарках на Новый год 🎄' },
  { id: 'tab-3', title: 'Вкладочка 3', content: 'Не забудь отдохнуть после листания вкладок 😴' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { id, title, content } = this.state.selectedTab;

    return (
      <div className="App">
        <h1 className="App__title">
          {`${title} выбрана`}
        </h1>
        <div>
          <Tabs
            tabs={tabs}
            selectedTabId={id}
            onTabSelected={this.onTabSelected}
          />
        </div>
        <p className="App__content">
          {content}
        </p>
      </div>
    );
  }
}

export default App;
