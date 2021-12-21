import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Кнопка 1', content: 'Ты всё сможешь!' },
  { id: 'tab-2', title: 'Кнопка 2', content: 'Ты - сладкая булочка' },
  { id: 'tab-3', title: 'Кнопка 3', content: 'Погладь первого попавшегося тебе котика' },
  { id: 'tab-4', title: 'Кнопка 4', content: 'Купи шоколадку и съешь всю сам' },
  { id: 'tab-5', title: 'Кнопка 5', content: 'Мама тебя любит! P.S. Надень шапку' },
  { id: 'tab-6', title: 'Кнопка 6', content: 'Освободи вечер для Гарри Поттера' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App App__container">
        <h1 className="App__title">
          {`Выбрана ${selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          tabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
        <div className="App__content">
          {selectedTab.content}
        </div>
      </div>
    );
  }
}

export default App;
