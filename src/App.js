import React from 'react';
import { TabsList } from './components/TabsList';
import { Text } from './components/Text';

import './App.scss';

/* eslint-disable */
const tabs = [
  { 
    id: 'tab-1',
    title: 'First interesting fact',
    content: 'В Гималаях (юго-западный Китай) живет малая панда(красная панда).\
    В английском языке её называют «Firefox».\
    Это слово вдохновило создателей популярного браузера…\
    вот только на логотип они почему-то поместили\
    красную лису, а не панду.'
  },
  {
    id: 'tab-2',
    title: 'Second interesting fact',
    content: '  В 2010 году ВВС США использовали\
      1 760 игровых приставок PlayStation 3 для создания суперкомпьютера.\
      Почему не компьютеры? Военные заявили, что PS3 – более экономичный и\
      безопасный для окружающей среды вариант.'
  },
  {
    id: 'tab-3',
    title: '  Third interesting fact',
    content: 'В 2009 году корпорация Google арендовала\
      у компании California Grazing… коз! Зачем?\
      Они очень эффективны в борьбе с сорняками на\
      разбитом вокруг штаб-квартиры «корпорации добра» газоне.'
  },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: tabs[0].id,
    title: tabs[0].title,
    text: tabs[0].content,
  }

  onTabSelected = (title) => {
    if (title === this.state.selectedTab) {
      return;
    }

    const selectedTab = tabs.find(tab => tab.title === title);

    this.setState({
      selectedTabId: selectedTab.id,
      title,
      text: selectedTab.content,
    });
  }

  render() {
    const { title, text, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {title}
        </h1>
        <TabsList
          tabs={tabs}
          onClick={this.onTabSelected}
          id={selectedTabId}
        />
        <Text
          text={text}
        />
      </div>
    );
  }
}

export default App;
