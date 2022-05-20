import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const text1 = `React - это библиотека JavaScript,
  созданная разработчиками Facebook и Instagram.
  Согласно опросу Stack Overflow Survey 2017,
  React был признан самой популярной технологией среди разработчиков.
  React также имеет честь быть самым популярным проектом JavaScript,
  согласно количеству звезд на GitHub.`;

const text2 = `jQuery - это библиотека, которая сделала JavaScript более доступным а DOM-манипуляцией проще, чем раньше.
  Плавная кривая обучения jQuery и простой синтаксис породили на стороне клиента новое поколение новых разработчиков.
  Несколько лет назад jQuery считался прочным решением для создания надежных веб-сайтов с поддержкой кросс-браузерности.
  Основные функции jQuery, такие как манипулирование DOM на основе селекторов CSS, обработка событий и создание вызовов AJAX, подпитывали его популярность.`;

const text3 = `Redux — это инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях JavaScript с большим количеством сущностей.
  Представляет собой библиотеку JavaScript.
  Название читается как «Редакс» и составлено из двух слов: reduce и flux.
  Reduce — это функция, которая приводит большую структуру данных к одному значению.
  Flux — архитектура приложения, при которой данные передаются в одну сторону.
  Инструмент основан на этих двух понятиях, поэтому они вынесены в название.`;

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'React', content: text1 },
  { id: 'tab-2', title: 'JQuery', content: text2 },
  { id: 'tab-3', title: 'Redux', content: text3 },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0] || null);

  return (
    <div className="App">
      <h1 className="App__title">
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

export default App;
