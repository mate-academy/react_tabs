import React from 'react';

import './App.scss';

import { Tabs } from './Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Statistic', content: 'По данным Международной организации по кофе, больше всего кофе на душу населения употребляют в Финляндии. Каждый житель этой страны употребляет в среднем 12 кг кофе ежегодно.' },
  { id: 'tab-2', title: 'Legend', content: 'По легенде, в девятом веке пастух по имени Кальдий увидел, как его козы ели ягоды с удивительного куста, и заметил, что после этого животные были полны энергии и не спали всю ночь.' },
  { id: 'tab-3', title: 'Fact', content: 'Зерна, из которых вы делаете кофе, - это на самом деле обжаренные семена из фрукта, который называют кофейная вишня. Если такую ​​вишенку раскусить, внутри вы найдете две сплющенные косточки-семечки.' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (event: Tab) => {
    this.setState({ selectedTab: event });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title has-text-centered mb-5 mt-3">
          Selected tab is
          {` ${this.state.selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
