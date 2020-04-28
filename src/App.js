import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: `Кто стучится в дверь моя? Это я невеста Твой!
       Видишь дома нет Никто?!`,
  },
  {
    title: 'Tab 2',
    content: `Сонце светит меможливо не могу дивиться,
      дайте мне шматок паперу чтобы затулиться`,
  },
  {
    title: 'Tab 3',
    content: `По стене ползет кирпич, деревянный как стекло,
      ну и пусть себе плывет, нам не нужен пенопласт`,
  },
];

const App = () => (
  <>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </>
);

export default App;
