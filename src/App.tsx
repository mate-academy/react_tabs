import React from 'react';
import { Tabs } from './Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: '21 августа 1911 года Джоконду украл итальянский мастер по зеркалам Винченцо Перуджи, который в то время работал в Лувре. Зачем он это сделал до сих пор не понятно. Существует версия, что Перуджи собирался вернуть «Мону Лизу» в Италию, будучи уверенным в том, что во Францию она попала незаконно, не зная' },
  { id: 'tab-2', title: 'Tab 2', content: ' GurzadyanВ обширном зале-кабинете Гурзадяна покамест тепло от солнечной осени. Светло от его картин, как ковер покрывающих стены — алых маков, летних ущелий, привольных просторов с двуглавым Араратом. Столы, стулья, кресла завалены книгами, рукописями, ксерокопиями, глянцевитыми научными журналами, которые регулярно присылают из-за рубежа.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Огромная беда состоит в том, что обучение в школе очень мало связано с жизнью за ее пределами. Сколько бывших учеников читают Мильтона, Т. Харди или Шоу? Сколько слушают Бетховена или Баха? Школа игнорирует воспитание чувств ребенка, по крайней мере так построены школьные предметы' },
];

interface State {
  selectedTab: Tab,
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[1],
  };

  selectHandler = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {selectedTab.title}
        </h1>
        <div className="tabs__list">
          <Tabs
            tabs={tabs}
            onTabSelected={this.selectHandler}
            selectedTabId={selectedTab.id}
          />
        </div>
        <p
          className="tabs__content"
        >
          {selectedTab.content}
        </p>
      </div>
    );
  }
}
